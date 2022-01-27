import { Component, OnInit } from '@angular/core';
import { Shared } from '../shared';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor(
    public shared: Shared
  ) { }

  ngOnInit(): void {
  }

}
