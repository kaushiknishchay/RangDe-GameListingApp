import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  @Input() gamesData: any;
  @Input() apiLimit: any;
  @Input() platFormList: any;

  @Output() messageEvent = new EventEmitter<any>();

  sortBys = [
    {
      value: 'score', viewValue: 'Score Asc', order: 1
    }, {
      value: 'score', viewValue: 'Score Desc', order: -1
    },
  ];
  sortPlatform;
  searchText: any;
  sortValue: any = {
    value: '', order: 0
  };

  constructor() {
  }

  ngOnInit() {
  }

  updateSearchText(str) {
    this.messageEvent.emit({
      type: 'search', value: str
    });
  }
  updateScoreOrder(value){
    this.messageEvent.emit({
      type: 'score', value: value
    });
  }

  updatePlatform(value){
    this.messageEvent.emit({
      type: 'platform', value: value
    });
  }

}
