import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {ConfigService} from "./config.service";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  endpoint: string;

  constructor(private http: HttpClient, private config: ConfigService) {
    this.http = http;
    this.endpoint = config.endpoint;
  }

  getGameNames(): Observable<string[]> {
    return this.http.get<string[]>(this.endpoint + "/game")
  }
}

