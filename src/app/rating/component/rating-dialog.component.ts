import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {RatingDialogData} from "../model/rating-dialog.data";

@Component({
  selector: 'rating-dialog',
  templateUrl: 'rating-dialog.component.html',
  styleUrls: ['rating-dialog.component.css']
})
export class RatingDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: RatingDialogData,
              public dialogRef: MatDialogRef<RatingDialogComponent>
  ) {
  }
  selectedRating: number = 0;

  addRating(rating: number): void {
    this.selectedRating = rating;
  }

  saveRating(): void {
    if (this.selectedRating) {
      this.dialogRef.close(this.selectedRating);
      this.selectedRating = 0;
    }
  }

}
