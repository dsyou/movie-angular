import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TopBarComponent} from "./layout/top-bar/top-bar.component";
import {NavBarComponent} from "./layout/nav-bar/nav-bar.component";
import {ContentComponent} from "./layout/content/content.component";
import {SharedModule} from "./shared.module";
import {MatButtonModule} from "@angular/material/button";
import {RatingModule} from "./rating/rating.module";
import {MoveModule} from "./movie/move.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavBarComponent,
    ContentComponent
  ],
  imports: [
    MoveModule,
    RatingModule,
    AppRoutingModule,
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
