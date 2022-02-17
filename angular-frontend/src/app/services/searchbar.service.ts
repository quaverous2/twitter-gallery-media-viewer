import { Injectable } from '@angular/core';
import { TwitterApi } from 'twitter-api-v2';

@Injectable({
  providedIn: 'root'
})
export class SearchbarService {

  client = new TwitterApi('APIKEY');;

  constructor() { }

  async getUserData() {
    const homeTimeline = await this.client.v1.homeTimeline();

  }
}
