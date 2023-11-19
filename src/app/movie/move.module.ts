import {NgModule} from "@angular/core";
import {MovieComponent} from "./components/movie.component";
import {CommonModule} from "@angular/common";
import {MoviePage} from "./pages/movie.page";
import {HttpClientModule} from "@angular/common/http";

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
    CommonModule,
    HttpClientModule
  ]
})
export class MoveModule {

}
