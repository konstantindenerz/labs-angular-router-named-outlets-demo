import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SiteSheetComponent} from './site-sheet.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    SiteSheetComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [SiteSheetComponent]
})
export class SiteSheetModule {
}
