import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { Shared } from "./shared";


@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        InputTextModule
    ],
    providers: [Shared]
})
export class Page { }