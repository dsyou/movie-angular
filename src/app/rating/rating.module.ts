import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared.module";
import {RatingDialogComponent} from "./component/rating-dialog.component";

@NgModule({
  declarations: [
    RatingDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
})
export class RatingModule {

}
