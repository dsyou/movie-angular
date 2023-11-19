import {Component} from "@angular/core";
import {Movie} from "../model/movie.data";
import {MovieHttpService} from "../services/movie-http.service";
import {Observable} from "rxjs";

@Component({
  selector: "movie-page",
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.css']
})
export class MoviePage {

  movies$: Observable<Movie[]> | undefined;

  constructor(private movieHttService: MovieHttpService) {
    this.getMovies();
  }

  getMovies() {
    this.movies$ = this.movieHttService.getMovies()
  }

}
