import {NgModule} from "@angular/core";
import {MovieComponent} from "./components/movie.component";
import {CommonModule} from "@angular/common";
import {MoviePage} from "./pages/movie.page";
import {HttpClientModule} from "@angular/common/http";
import {MovieAddFormComponent} from "./components/movie-add-form/movie.add.form.component";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    MoviePage,
    MovieComponent,
    MovieAddFormComponent
  ],
  exports: [
    MoviePage,
    MovieComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ]
})
export class MoveModule {

}
