import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchGames'
})
export class SearchGamesPipe implements PipeTransform {

  transform(gamesData: any, searchText: any): any {
    if(!gamesData) return [];
    if(!searchText) return gamesData;

    searchText = searchText.toLowerCase();

    return gamesData.filter( it => {
      return it.title.toLowerCase().includes(searchText);
    });
  }

}
