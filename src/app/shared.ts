import { Injectable } from "@angular/core";

@Injectable()
export class Shared {

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
}