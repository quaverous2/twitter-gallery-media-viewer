import { Component, OnInit } from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  constructor(
    //public searchbar = SearchbarComponent;
  ) { }

  ngOnInit(): void {
  }

}
