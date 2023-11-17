import {Component, Input} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {RatingDialogComponent} from "../../rating/component/rating-dialog.component";
import {RatingDialogData} from "../../rating/model/rating-dialog.data";
import {Movie} from "../model/movie.data";

@Component({
  selector: 'movie-component',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  @Input() movie!: Movie;

  genreIcons: { [key: string]: string } = {
    'Action': 'assets/action-icon.png',
    'Comedy': 'assets/comedy-icon.png',
    'Drama': 'assets/drama-icon.png',
    // Add more genres and their icons as needed
  };

  constructor(private dialog: MatDialog) {
  }

  calculateAverageRating(film: Movie): string {
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
    this.movie.ratings.push(rate)
  }

  getGenreIcon(genre: string): string {
    return this.genreIcons[genre] || 'assets/default-icon.png'
  }
}
