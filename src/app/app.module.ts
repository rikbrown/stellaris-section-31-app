import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MaterialIncludesModule } from "./material-includes.module";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CountriesComponent } from "./countries.component";
import { IndexComponent } from './component/index.component';
import { GamesDropdownComponent } from "./component/games/games-dropdown.component";

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    IndexComponent,
    GamesDropdownComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialIncludesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
