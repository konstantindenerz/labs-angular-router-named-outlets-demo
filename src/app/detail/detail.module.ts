import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetailComponent} from './detail.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: 'detail', component: DetailComponent, outlet: 'side'}])
  ]
})
export class DetailModule {
}
