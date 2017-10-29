import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material/material.module";
import {GamesArenaService} from "./service/games-arena.service";
import {HttpClientModule} from "@angular/common/http";
import { GameItemComponent } from './game-item/game-item.component';
import { FilterGamesPipe } from './pipes/filter-games.pipe';
import { SortGamesPipe } from './pipes/sort-games.pipe';
import {FormsModule} from "@angular/forms";
import { SearchGamesPipe } from './pipes/search-games.pipe';
import { SearchInputComponent } from './search-input/search-input.component';

@NgModule({
  declarations: [
    AppComponent,
    GameItemComponent,
    FilterGamesPipe,
    SortGamesPipe,
    SearchGamesPipe,
    SearchInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [GamesArenaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
