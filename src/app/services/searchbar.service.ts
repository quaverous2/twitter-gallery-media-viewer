import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchbarService {

  constructor() { }

  getUserData() {
    console.log("API Request")
  }
}
