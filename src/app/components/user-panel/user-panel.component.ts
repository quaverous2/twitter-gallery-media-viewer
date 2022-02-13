import { Component, OnInit } from '@angular/core';
import { Shared } from '../shared';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  constructor(
    public shared: Shared
  ) { }

  ngOnInit(): void {
  }

}
