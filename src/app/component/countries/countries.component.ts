import {Component, OnInit, ViewChild} from '@angular/core';
import { CountryService } from "service/country.service";
import {PerennialCountryData} from "types";
import {MatSort, MatTableDataSource} from "@angular/material";
import {ConfigService} from "service/config.service";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  private countries: PerennialCountryData[];

  @ViewChild(MatSort) sort: MatSort;

  constructor(
      private countryService: CountryService,
      private configService: ConfigService) { }

  ngOnInit() {
    this.subscribeCountries();
    this.dataSource.sort = this.sort;
  }

  displayedColumns = [
    'name',
    'victoryScore',
    'techPower',
    'militaryPower',
    'economyPower',
  ];

  dataSource = new MatTableDataSource([]);


  private subscribeCountries(): void {
    this.updateCountries(this.configService.currentGame)
  }

  private updateCountries(countryName: string): void {
    this.countryService.getCountriesOnDate(countryName, 'latest')
      .subscribe(countries => this.dataSource.data = countries)
  }

}
