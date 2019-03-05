import {Injectable}                                                        from '@angular/core';
import {ActivatedRoute, NavigationEnd, ParamMap, Router} from "@angular/router";
import {Observable}                                                        from "rxjs/Observable";
import {first}                                                             from "rxjs/operators/first";
import {filter}                                                            from "rxjs/operators/filter";
import {map}                                                               from "rxjs/operators/map";
import {switchMap}                                                         from "rxjs/operators/switchMap";

@Injectable({ providedIn: 'root' })
export class DeepRouterService {
  constructor(public activatedRoute: ActivatedRoute, public router: Router) {}

  getActivatedRouteParams(): Observable<ParamMap> {
    return this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map((): ActivatedRoute => {
        let route = this.activatedRoute;
        while (route.firstChild)
        {
          route = route.firstChild;
        }
        return route;
      }),
      filter((route: ActivatedRoute) => route.outlet === 'primary'),
      switchMap((route: ActivatedRoute) => route.paramMap) , first());
  }

  navigate(commands: any[]): Promise<boolean> {
    return this.router.navigate(commands)
  }
}

