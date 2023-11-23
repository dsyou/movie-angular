import {NgModule} from "@angular/core";
import {MovieListComponent} from "./components/movie-list/movie-list.component";
import {CommonModule, DatePipe} from "@angular/common";
import {MovieListPage} from "./pages/movie-list-page/movie-list.page";
import {MovieAddFormComponent} from "./components/movie-add-form/movie-add-form.component";
import {MovieAddPage} from "./pages/movie-add-page/movie-add.page";
import {SharedModule} from "../shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatMomentDateModule} from "@angular/material-moment-adapter";

@NgModule({
  declarations: [
    MovieListPage,
    MovieListComponent,
    MovieAddPage,
    MovieAddFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
  ],
  providers: [DatePipe],
})
export class MoveModule {

}
