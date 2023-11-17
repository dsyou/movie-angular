import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Movie} from "../model/movie.data";
import {BACKEND_URL} from "../../configuration/url";
import {share} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieHttpService {

  constructor(private httpClient: HttpClient) {
  }

  public getMovies(){
    return this.httpClient.get<Movie[]>(`${BACKEND_URL}/movies}`).pipe(share());
  }

}
