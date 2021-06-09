import {Directive, Host, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {SiteSheetService} from "./site-sheet/site-sheet.service";

@Directive({
  selector: 'router-outlet[name=side]'
})
export class SiteSheetRouterOutletDirective implements OnInit, OnDestroy {
  readonly destroy$ = new Subject<void>();

  constructor(@Host() private outlet: RouterOutlet, private router: Router, private activatedRoute: ActivatedRoute, private siteSheetService: SiteSheetService) {
    console.log(outlet);
  }

  ngOnInit(): void {
    this.outlet.activateEvents.pipe(takeUntil(this.destroy$)).subscribe(_ => {
      console.log('event', true)
      this.siteSheetService.show$$.next(true);
    })
    this.outlet.deactivateEvents.pipe(takeUntil(this.destroy$)).subscribe(_ => {
      this.siteSheetService.show$$.next(false);
    })
    this.siteSheetService.closed$.pipe(takeUntil(this.destroy$)).subscribe(_ => {
      console.log(this.activatedRoute);
      this.router.navigate([{outlets: {primary: null, side: null}}], {relativeTo: this.activatedRoute})
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

}
