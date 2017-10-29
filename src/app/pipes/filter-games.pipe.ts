import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterGames'
})
export class FilterGamesPipe implements PipeTransform {

  transform(gamesData: any, platform: any): any {
    if(!gamesData) return [];
    if(!platform) return gamesData;

    platform = platform.toLowerCase();

    return gamesData.filter( it => {
      return it.platform.toLowerCase()==platform;
    });
  }

}
