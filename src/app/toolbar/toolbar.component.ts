import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../game-state-service/game-state.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {

  constructor(
    public gameStateService: GameStateService
  ) { }

  ngOnInit(): void {
  }

}
