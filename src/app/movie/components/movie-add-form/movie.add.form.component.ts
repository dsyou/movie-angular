import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MovieAddForm} from "./movie.add.form";

@Component({
    selector: 'movie-add-form',
    templateUrl: './movie.add.form.component.html',
    styleUrls: ['./movie.add.form.component.css']
  }
)
export class MovieAddFormComponent {

  addMovieForm: FormGroup;

  constructor() {
    this.addMovieForm = new FormGroup<MovieAddForm>({
      title: new FormControl("", [Validators.required]),
      genre: new FormControl("", [Validators.required]),
      productionDate: new FormControl(new Date(), [Validators.required])
    })
  }

  submitForm() {
    const formValid = this.addMovieForm.valid;
    if(formValid){

    }
  }
}
