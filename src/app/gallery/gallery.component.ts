import { Component, OnInit } from '@angular/core';
import { Shared } from '../shared';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(
    public shared: Shared
  ) { }

  ngOnInit(): void {
  }

}
