import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieAddFormComponent} from "./movie/components/movie-add-form/movie.add.form.component";
import {MoviePage} from "./movie/pages/movie.page";

const routes: Routes = [
  {path: "", component: MoviePage},
  {path: "movie-add", component:MovieAddFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
