import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovieListPage} from "./movie/pages/movie-list-page/movie-list.page";
import {MovieAddPage} from "./movie/pages/movie-add-page/movie-add.page";

const routes: Routes = [
  {path: "", component: MovieListPage},
  {path: "movie-add", component:MovieAddPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
