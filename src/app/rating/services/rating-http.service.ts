import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BACKEND_URL} from "../../configuration/url";
import {share} from "rxjs";
import {RatingModel} from "../model/rating.model";

@Injectable({
  providedIn: 'root'
})
export class RatingHttpService {

  constructor(private httpClient: HttpClient) {
  }

  public getRates(uuid: string) {
    return this.httpClient.get<number>(`${BACKEND_URL}/rates/${uuid}`).pipe(share());
  }

  public addRate(movieUuid: string, rate: number) {
    const addRateModel: RatingModel = {movieUuid, rate};
    return this.httpClient.post(`${BACKEND_URL}/rates`, addRateModel).pipe(share());
  }

}
