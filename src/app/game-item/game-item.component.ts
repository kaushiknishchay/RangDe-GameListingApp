import {Component, Input, OnInit} from '@angular/core';
import {GameItem} from "../model/game-item";

@Component({
  selector: 'game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent implements OnInit {

  @Input() gameItem: GameItem;
  constructor() { }

  ngOnInit() {
  }

}
