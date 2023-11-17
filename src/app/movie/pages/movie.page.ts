import {Component} from "@angular/core";
import {Movie} from "../model/movie.data";

@Component({
  selector: "movie-page",
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.css']
})
export class MoviePage {
  movies: Movie[] = [
    {id: 1, title: 'Movie 1', productionDate: new Date(), genre: 'Akcja', ratings: [5, 7, 8]},
    {id: 2, title: 'Movie 2', productionDate: new Date(), genre: 'Komedia', ratings: [6, 8, 9]},
    {id: 3, title: 'Movie 3', productionDate: new Date(), genre: 'Dramat', ratings: []},
  ];

}
