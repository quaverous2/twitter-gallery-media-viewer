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
    profileData: any = undefined;
    mediaArray: any[] = [];

    searchUser(handle: string) {
        this.sbService.getUser(handle).subscribe(x => {
            this.profileData = x;
            this.sbService.getUserTimeline(x.id).subscribe((y: any) => {
                this.mediaArray = [];
                y.media.forEach((element: any) => {
                    this.mediaArray.push(element.url);
                });
            })
        })
    }

    getUserTimeline(id: string) {

    }
}