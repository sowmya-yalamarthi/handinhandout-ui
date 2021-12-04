import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDashboardRoutingModule } from './home-dashboard-routing.module';
import { HomedashboardComponent } from './homedashboard/homedashboard.component';


@NgModule({
  declarations: [HomedashboardComponent],
  imports: [
    CommonModule,
    HomeDashboardRoutingModule,
  ]
})
export class HomeDashboardModule { }
