import {
  MatButtonModule,
  MatCardModule,
  MatIconModule, MatListModule,
  MatMenuModule, MatNavList, MatProgressSpinnerModule, MatSelectModule, MatSidenavModule, MatSortModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";

let modules = [
  BrowserAnimationsModule,
  FormsModule,
  MatButtonModule,
  MatMenuModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatCardModule,
  FlexLayoutModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialIncludesModule { }
