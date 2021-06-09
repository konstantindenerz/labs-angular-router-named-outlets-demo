import {Injectable} from "@angular/core";
import {BehaviorSubject, ReplaySubject} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Injectable({providedIn: 'root'})
export class SiteSheetService {
  show$$ = new BehaviorSubject<boolean>(false);
  show$ = this.show$$.asObservable();

  closed$$ = new ReplaySubject<void>(1);
  closed$ = this.closed$$.asObservable();
}
