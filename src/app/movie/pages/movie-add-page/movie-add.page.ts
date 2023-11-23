import {Component, OnDestroy} from "@angular/core";
import {Router} from "@angular/router";
import {MovieHttpService} from "../../services/movie-http.service";
import {MovieAddModel} from "../../model/movie-add.model";
import {Subscription} from "rxjs";

@Component({
  selector: "app-movie-list-page",
  templateUrl: './movie-add.page.html',
  styleUrls: ['./movie-add.page.css']
})
export class MovieAddPage implements OnDestroy {

  private movieAddSubscription: Subscription | undefined;

  constructor(private movieHttService: MovieHttpService, private router: Router) {
  }

  sendMovieAdd(movieAddModel: MovieAddModel) {
    this.movieHttService.createMovie(movieAddModel)
      .subscribe({
        next: () => {
          this.router.navigate([""]);
        }
      });
  }

  ngOnDestroy(): void {
    this.movieAddSubscription?.unsubscribe();
  }

}
