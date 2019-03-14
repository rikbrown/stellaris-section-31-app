import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GameService} from "../../service/game.service";

@Component({
  selector: 'app-games-dropdown',
  templateUrl: './games-dropdown.component.html',
  styleUrls: ['./games-dropdown.component.scss']
})
export class GamesDropdownComponent implements OnInit {
  private gameNames: string[];
  @Output() private gameSelected = new EventEmitter<string>();
  private _selectedGame: string;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.subscribeToGames();
  }

  @Input()
  set selectedGame(name: string) {
    console.log(`selected: ${name}`);
    this._selectedGame = name;
    this.gameSelected.emit(name);
  }

  get selectedGame(): string { return this._selectedGame }

  private subscribeToGames(): void {
    this.gameService.getGameNames().subscribe(gameNames => this.gameNames = gameNames)
  }

}
