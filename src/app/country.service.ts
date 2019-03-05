import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {BasicCountryStats, PerennialCountryData} from './types'

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  host = window.location.origin.replace("4200", "8080")

  constructor(private http: HttpClient) {
    this.http = http
  }

  getCountries(gameName: string): Observable<PerennialCountryData[]> {
    return this.http.get<PerennialCountryData[]>(`${this.host}/api/game/${gameName}/country`)
  }

  getCountriesOnDate(gameName: string, date: string): Observable<BasicCountryStats[]> {
    return this.http.get<BasicCountryStats[]>(`${this.host}/api/game/${gameName}/date/${date}/country`)
  }
}

