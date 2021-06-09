import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SiteSheetRouterOutletDirective} from "./site-sheet-router-outlet.directive";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)}
];

@NgModule({
  declarations: [SiteSheetRouterOutletDirective],
  imports: [RouterModule.forRoot(routes, {useHash: true, enableTracing: true})],
  exports: [RouterModule, SiteSheetRouterOutletDirective]
})
export class AppRoutingModule {
}
