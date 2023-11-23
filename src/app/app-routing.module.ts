import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieAddFormComponent} from "./movie/components/movie-add-form/movie-add-form.component";
import {MovieListPage} from "./movie/pages/movie-list-page/movie-list.page";

const routes: Routes = [
  {path: "", component: MovieListPage},
  {path: "movie-add", component:MovieAddFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
