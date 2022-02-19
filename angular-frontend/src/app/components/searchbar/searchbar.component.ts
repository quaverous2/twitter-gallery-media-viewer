import { Component, OnInit } from '@angular/core';
import { transition, style, animate, trigger } from '@angular/animations';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { pairwise } from 'rxjs';
import { Shared } from '../shared';

const enterTransition = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('0.2s ease-in', style({
    opacity: 1
  }))
]);

const leaveTrans = transition(':leave', [
  style({
    opacity: 1
  }),
  animate('0.2s ease-out', style({
    opacity: 0
  }))
])

const fadeIn = trigger('fadeIn', [
  enterTransition
]);

const fadeOut = trigger('fadeOut', [
  leaveTrans
]);

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
  animations: [
    fadeIn,
    fadeOut
  ]
})
export class SearchbarComponent implements OnInit {

  searchForm: FormGroup;
  today = new Date();
  sortBy: any[];
  selectedSort: String = '';
  advancedOptionsSelection: String[] = ["Show Advanced Options", "Hide Advanced Options"]
  advancedOptionLabel: String = " ";
  advancedOptionsDisplay: boolean = false;

  constructor(
    private shared: Shared
  ) {
    this.searchForm = new FormGroup({
      handle: new FormControl('', Validators.required),
      sortBy: new FormControl(''),
      dateFrom: new FormControl('', this.dateValidity()),
      dateTo: new FormControl({ value: '', disabled: true }, this.dateValidity())
    })

    // Disable "dateTo" field in absence of "dateFrom"
    this.searchForm.get('dateFrom')?.valueChanges.subscribe(() => {
      if (this.searchForm.get('dateFrom')?.value) {
        this.searchForm.get('dateTo')?.enable();
      } else {
        this.searchForm.get('dateTo')?.setValue('');
        this.searchForm.get('dateTo')?.disable();
      }
      this.searchForm.get('dateFrom')?.updateValueAndValidity({ emitEvent: false });
      this.searchForm.get('dateTo')?.updateValueAndValidity({ emitEvent: false });
    })

    this.searchForm.valueChanges.pipe(pairwise())
      .subscribe(([prev, next]: [any, any]) => {
        if ((next.dateFrom > next.dateTo && next.dateTo)) {
          this.searchForm.get('dateTo')?.setErrors({ 'incorrect': true });
        } else {
          if (next.dateTo < this.today) {
            this.searchForm.get('dateTo')?.setErrors(null);
          } else {
            this.searchForm.get('dateTo')?.setErrors({ 'incorrect': true });
          }
        }
      })

    this.sortBy = [
      { display: "   ", code: "N" },
      { display: "Likes", code: 'L' },
      { display: "Retweets", code: "R" },
      { display: "Comment Amount", code: "C" }
    ]
    this.advancedOptionLabel = this.advancedOptionsSelection[0];
  }

  ngOnInit(): void {
  }

  advancedOptions() {
    if (this.advancedOptionLabel == this.advancedOptionsSelection[0]) {
      this.advancedOptionLabel = this.advancedOptionsSelection[1]
    } else {
      this.advancedOptionLabel = this.advancedOptionsSelection[0]
    }
    this.advancedOptionsDisplay = !this.advancedOptionsDisplay;
  }

  dateValidity() {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value > this.today) {
        return { error: true };
      } else {
        return null;
      }
    }
  }

  clearFrom() {
    console.log("hello");
    this.searchForm.get('dateFrom')?.setValue("");
    this.clearTo();
  }

  clearTo() {
    console.log("hello1");
    this.searchForm.get('dateTo')?.setValue("");
    this.searchForm.get('dateTo')?.setErrors(null);
  }

  search() {
    this.shared.searchUser(this.searchForm.get('handle')?.value);
  }

}
