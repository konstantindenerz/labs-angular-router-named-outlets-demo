import {Component, HostListener, OnInit} from '@angular/core';
import {SiteSheetService} from "../site-sheet/site-sheet.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'labs-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private siteSheetService: SiteSheetService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
}
