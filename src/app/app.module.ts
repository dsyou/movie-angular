import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RatingDialogComponent} from "./rating/rating-dialog.component";
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    RatingDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {width: "1000px"}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
