import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { InputTextModule } from 'primeng/inputtext';
import { Button, ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { Page } from './page';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [
    AppComponent,
    UserPanelComponent,
    SearchbarComponent,
    GalleryComponent
  ],
  imports: [
    Page,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
