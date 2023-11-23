import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RatingDialogComponent} from "./rating/component/rating-dialog.component";
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MoveModule} from "./movie/move.module";
import {TopBarComponent} from "./layout/top-bar/top-bar.component";
import {NavBarComponent} from "./layout/nav-bar/nav-bar.component";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {ContentComponent} from "./layout/content/content.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavBarComponent,
    RatingDialogComponent,
    ContentComponent
  ],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    MoveModule,
    BrowserModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    CommonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {width: "1000px"}}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
