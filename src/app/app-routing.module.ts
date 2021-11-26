import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './components/content/content.component';


const routes: Routes = [
  { path: 'accounts', loadChildren: () => import('./modules/accounts/accounts.module').then(x => x.AccountsModule) },
  { path: 'home-dashboard', loadChildren: () => import('./modules/home-dashboard/home-dashboard.module').then(x => x.HomeDashboardModule) },
  { path: '', component: ContentComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
