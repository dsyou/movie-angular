import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {RatingDialogComponent} from "../rating/rating-dialog.component";
import {RatingDialogData} from "../rating/rating-dialog.data";
import {Movie} from "./movie.data";

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  movies: Movie[] = [
    {id: 1, title: 'Movie 1', productionDate: new Date(), genre: 'Akcja', ratings: [5, 7, 8]},
    {id: 2, title: 'Movie 2', productionDate: new Date(), genre: 'Komedia', ratings: [6, 8, 9]},
    {id: 3, title: 'Movie 3', productionDate: new Date(), genre: 'Dramat', ratings: []},
  ];

  constructor(private dialog: MatDialog) {
  }

  calculateAverageRating(film: any): string {
    const ratings = film.ratings;
    if (ratings.length === 0) {
      return 'Brak ocen';
    }

    const averageRating = ratings.reduce((acc: any, curr: any) => acc + curr, 0) / ratings.length;
    return averageRating.toFixed(2);
  }

  openRatingModal(film: any): void {
    const data: RatingDialogData = {
      title: film.title,
      content: "",
    }
    const dialogRef: MatDialogRef<RatingDialogComponent> = this.dialog.open(RatingDialogComponent, {data});

    dialogRef.afterClosed().subscribe((rate: number) => {
      if (rate != null) {
        this.handleRatingAdded(film.id, rate);
      }
    });
  }

  handleRatingAdded(movieId: number, rate: number) {
    const movieIndex = this.movies.findIndex((film) => film.id === movieId);
    if (movieIndex !== -1 && rate > 0) {
      this.movies[movieIndex].ratings.push(rate);
    }
  }

}
