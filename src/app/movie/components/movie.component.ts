import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {RatingDialogComponent} from "../../rating/component/rating-dialog.component";
import {RatingDialogData} from "../../rating/model/rating-dialog.data";
import {Movie} from "../model/movie.data";
import {Rating} from "../../rating/model/rating.data";
import {Observable} from "rxjs";
import {RatingHttpService} from "../../rating/services/rating-http.service";

@Component({
  selector: 'movie-component',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  @Input() movie!: Movie;
  rates$: Observable<Rating> | undefined;
  rate: number = 7;

  genreIcons: { [key: string]: string } = {
    'Action': 'assets/action-icon.png',
    'Comedy': 'assets/comedy-icon.png',
    'Drama': 'assets/drama-icon.png',
    // Add more genres and their icons as needed
  };

  constructor(private dialog: MatDialog,
              private ratingHttpService: RatingHttpService
  ) {
     this.ratingHttpService.getRates("1DC0F587-4E1B-47D6-A3A4-6235DEECDDC7").subscribe(
       rate => {
         this.rate= rate;
         console.log(this.rate)
       }
     );

     // this.rates$.subscribe(rating =>{
     //   console.log('Received rating:', rating);
     // })
  }

  calculateAverageRating(ratings: number): string {
    console.log('Calculating average rating...');
    if (!ratings) {
      console.log('No ratings available.');
      return 'Brak ocen';
    }


     return ratings.toFixed(2);
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
    // this.movie.ratings.push(rate)
  }

  getGenreIcon(genre: string): string {
    return this.genreIcons[genre] || 'assets/default-icon.png'
  }
}
