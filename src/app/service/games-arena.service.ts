import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GamesArenaService {

  constructor(private http: HttpClient) {
  }

  API_URL = "http://starlord.hackerearth.com/gamesarena";
  API_URL2 = '../../assets/apidata.json';

  getGamesData(){
      return this.http.get(this.API_URL2);
  }

}
