import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from "./component/index.component";
import {CountriesComponent} from "./component/countries/countries.component";

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'game/:gameName', component: IndexComponent },
  { path: 'game/:gameName/countries', component: CountriesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        paramsInheritanceStrategy: 'always',
        // enableTracing: true,
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
