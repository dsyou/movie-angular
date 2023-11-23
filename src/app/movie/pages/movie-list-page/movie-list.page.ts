import {Component} from "@angular/core";
import {Movie} from "../../model/movie.data";
import {MovieHttpService} from "../../services/movie-http.service";
import {Observable} from "rxjs";

@Component({
  selector: "app-movie-list-page",
  templateUrl: './movie-list.page.html',
  styleUrls: ['./movie-list.page.css']
})
export class MovieListPage {

  movies$: Observable<Movie[]> | undefined;

  constructor(private movieHttService: MovieHttpService) {
    this.getMovies();
  }

  getMovies() {
    this.movies$ = this.movieHttService.getMovies()
  }

}
