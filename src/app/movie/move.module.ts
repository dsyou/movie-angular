import {NgModule} from "@angular/core";
import {MovieListComponent} from "./components/movie-list/movie-list.component";
import {CommonModule} from "@angular/common";
import {MovieListPage} from "./pages/movie-list-page/movie-list.page";
import {HttpClientModule} from "@angular/common/http";
import {MovieAddFormComponent} from "./components/movie-add-form/movie-add-form.component";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    MovieListPage,
    MovieListComponent,
    MovieAddFormComponent
  ],
  exports: [
    MovieListPage,
    MovieListComponent
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
