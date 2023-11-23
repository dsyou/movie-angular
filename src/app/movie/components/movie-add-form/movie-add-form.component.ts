import {Component, EventEmitter, Output} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MovieAddForm} from "./movie-add-form";
import {ValidationMessages} from "../../../configuration/ValidationMessages";
import {MOVIE_GENRE} from "../../model/movie.genre";
import {MovieAddModel} from "../../model/movie-add.model";

@Component({
    selector: 'app-movie-add-form',
    templateUrl: './movie-add-form.component.html',
    styleUrls: ['./movie-add-form.component.css']
  }
)
export class MovieAddFormComponent {
  @Output()
  formSubmitted: EventEmitter<MovieAddModel> = new EventEmitter<MovieAddModel>();
  addMovieForm: FormGroup;

  protected readonly ValidationMessages = ValidationMessages;
  protected readonly MovieGenres = MOVIE_GENRE;

  constructor() {
    this.addMovieForm = new FormGroup<MovieAddForm>({
      title: new FormControl("", [Validators.required]),
      genre: new FormControl("", [Validators.required]),
      productionDate: new FormControl(new Date(), [Validators.required])
    })
  }

  submitForm() {
    const formValid = this.addMovieForm.valid;
    if (!formValid) {
      // this.statementService.dataNotCorrect();
    } else {
      this.formSubmitted.emit({
        genre: this.addMovieForm.get("genre")?.value,
        title: this.addMovieForm.get("title")?.value,
        productionDate: this.addMovieForm.get("productionDate")?.value
      })
    }
  }
}
