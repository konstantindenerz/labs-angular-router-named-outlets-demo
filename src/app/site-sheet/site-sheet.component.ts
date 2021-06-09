import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {SiteSheetService} from "./site-sheet.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'labs-site-sheet',
  templateUrl: './site-sheet.component.html',
  styleUrls: ['./site-sheet.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('*', style({
        opacity: 1
      })),
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate('.3s ease'))
    ])
  ]
})
export class SiteSheetComponent implements OnInit, OnDestroy {
  @Input() show: boolean = false;
  private readonly destroy$ = new Subject<void>();

  constructor(private siteSheet: SiteSheetService) {
  }

  ngOnInit(): void {
    this.siteSheet.show$.pipe(takeUntil(this.destroy$)).subscribe(show => this.show = show);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  close() {
    this.siteSheet.closed$$.next();
  }
}
