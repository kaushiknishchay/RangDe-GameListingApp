import {Component, OnInit} from '@angular/core';
import {GamesArenaService} from "./service/games-arena.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  gamesData: any;
  title = 'Rang De Game App';
  apiLimit: Object = "";
  isLoading: boolean;
  platformList;
  sortPlatform;
  searchText;
  sortValue: any = {
    value: '', order: 0
  };

  constructor(private gamesApi: GamesArenaService) {
    this.gamesData = [];
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.gamesApi.getGamesData().subscribe((data: Object[]) => {
      this.apiLimit = data[0];
      data.splice(0, 1);
      this.gamesData = data;
      this.isLoading = false;
      this.platformList = new Set(data.map(item => item['platform']));
    });
  }

  messageRespond(data) {
    switch (data.type) {
      case "search":
        this.searchText = data.value;
        break;
      case "score":
        this.sortValue = data.value;
        break;
      case "platform":
        this.sortPlatform = data.value;
        break;
      default:
        break;
    }

  }

}
