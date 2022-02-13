import { Injectable } from "@angular/core";
import { SearchbarService } from "../services/searchbar.service";

@Injectable()
export class Shared {

    constructor(
        private sbService: SearchbarService
    ) {

    }

    //
    // This is a shared class that allows components to interact with each other easily through injection
    //
    profileData: any[] = [];
    mediaArray = [
        { "link": "../assets/default.jpg" },
        { "link": "../assets/default.jpg" },
        { "link": "../assets/default.jpg" },
        { "link": "../assets/default.jpg" },
        { "link": "../assets/default.jpg" },
        { "link": "../assets/default.jpg" },
        { "link": "../assets/default.jpg" },
        { "link": "../assets/default.jpg" },
        { "link": "../assets/default.jpg" },
    ]

    searchUser() {
        console.log(this.sbService.getUserData());
    }
}