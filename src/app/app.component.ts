import {Component, OnInit} from '@angular/core';
import {ConfigService} from "./service/config.service";
import {DeepRouterService} from "./service/deep-router.service";
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Section 31';

  constructor(
    private configService: ConfigService,
    private location: Location,
    private router: DeepRouterService) { }

  onGameChange(name: string) {
    if (name == null) return;
    this.configService.currentGame = name;
    console.log(this.router.activatedRoute.snapshot)


  }

  ngOnInit(): void {


    this.router.getActivatedRouteParams().subscribe(params => {
      this.onGameChange(params.get('gameName'))
    })
  }

}
