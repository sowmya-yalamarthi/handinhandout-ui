import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomedashboardComponent } from './homedashboard/homedashboard.component';


const routes: Routes = [
  {
    path: '', component: HomedashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeDashboardRoutingModule { }
