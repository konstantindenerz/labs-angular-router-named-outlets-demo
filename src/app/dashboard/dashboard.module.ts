import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {RouterModule} from "@angular/router";
import {DetailModule} from "../detail/detail.module";


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DetailModule,
    RouterModule.forChild([{path: '', component: DashboardComponent}])
  ]
})
export class DashboardModule {
}
