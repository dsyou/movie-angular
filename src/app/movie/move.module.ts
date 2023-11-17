import {NgModule} from "@angular/core";
import {MovieComponent} from "./components/movie.component";
import {CommonModule} from "@angular/common";
import {MoviePage} from "./pages/movie.page";

@NgModule({
  declarations: [
    MoviePage,
    MovieComponent
  ],
  exports: [
    MoviePage,
    MovieComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MoveModule {

}
