import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {RatingDialogComponent} from "../../rating/component/rating-dialog.component";
import {RatingDialogData} from "../../rating/model/rating-dialog.data";
import {Movie} from "../model/movie.data";
import {RatingHttpService} from "../../rating/services/rating-http.service";

@Component({
  selector: 'movie-component',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{
  @Input() movie!: Movie;
  @Output() rattingAdded = new EventEmitter<void>();
  // rates$: Observable<Rating> | undefined;
  rate!: number;

  genreIcons: { [key: string]: string } = {
    'Action': 'assets/action-icon.png',
    'Comedy': 'assets/comedy-icon.png',
    'Drama': 'assets/drama-icon.png',
    // Add more genres and their icons as needed
  };

  constructor(private dialog: MatDialog,
              private ratingHttpService: RatingHttpService
  ) {

  }

  ngOnInit(): void {
    this.ratingHttpService.getRates(this.movie.uuid).subscribe(
      rate => {
        this.rate= rate;
        console.log(this.rate)
      }
    );
  }

  calculateAverageRating(ratings: number): string {
    console.log('Calculating average rating...');
    if (!ratings) {
      console.log('No ratings available.');
      return 'Brak ocen';
    }

     return ratings.toFixed(2);
  }

  openRatingModal(movie: Movie): void {
    const data: RatingDialogData = {
      title: movie.title,
      content: "",
    }
    const dialogRef: MatDialogRef<RatingDialogComponent> = this.dialog.open(RatingDialogComponent, {data});

    dialogRef.afterClosed().subscribe(async (rate: number) => {
      if (rate != null) {
        await this.handleRatingAdded(movie.uuid, rate);
      }
    });
  }

  async handleRatingAdded(movieUuid: string, rate: number) {
    try {
      const response = await this.ratingHttpService.addRate(movieUuid, rate).toPromise();
      this.rattingAdded.emit();
      console.log('Rating added successfully:', response);
    } catch (error) {
      console.error('Error adding rating:', error);
    }
  }

  getGenreIcon(genre: string): string {
    return this.genreIcons[genre] || 'assets/default-icon.png'
  }

}
