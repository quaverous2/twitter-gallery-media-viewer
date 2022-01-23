import { Component, OnInit } from '@angular/core';
import { transition, style, animate, trigger } from '@angular/animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  sortBy: any[];
  selectedSort: String = '';
  advancedOptionsSelection: String[] = ["Show Advanced Options", "Hide Advanced Options"]
  advancedOptionLabel: String = " ";
  advancedOptionsDisplay: boolean = false;

  constructor() {
    this.searchForm = new FormGroup({
      handle: new FormControl('', Validators.required),
      sortBy: new FormControl(''),
      dateFrom: new FormControl(''),
      dateTo: new FormControl('')
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

  clearFrom() {
    console.log("hello");
    this.searchForm.get('dateFrom')?.setValue("");
  }

  clearTo() {
    console.log("hello1");
    this.searchForm.get('dateTo')?.setValue("");
  }

  search() {
    console.log("Search query initialized");
  }

}
