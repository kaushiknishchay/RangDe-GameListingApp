import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortGames'
})
export class SortGamesPipe implements PipeTransform {

  transform(gamesData: any, args?: any): any {
    return gamesData.sort(function(a, b){
      if(a.score < b.score){
        return -1 * args.direction;
      }
      else if( a.score > b.score){
        return 1 * args.direction;
      }
      else{
        return 0;
      }
    });
  }

}
