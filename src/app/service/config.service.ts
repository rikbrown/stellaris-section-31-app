import {EventEmitter, Injectable, Output} from "@angular/core";
import {DeepRouterService} from "./deep-router.service";

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
  private _currentGame: string = null;
  gameChanged = new EventEmitter<string>();
  endpoint: string = window.location.origin.replace("4200", "8080") + "/api";

  set currentGame(name: string) {
    if (this._currentGame == name) return;

    console.log(`Game change: ${name}`);
    this._currentGame = name;
    this.gameChanged.emit(name);
  }

  get currentGame(): string { return this._currentGame }

}

