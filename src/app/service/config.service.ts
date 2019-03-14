import {EventEmitter, Injectable, Output} from "@angular/core";
import {DeepRouterService} from "./deep-router.service";

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
  currentGame: string = null;
  endpoint: string = window.location.origin.replace("4200", "8080") + "/api";

}

