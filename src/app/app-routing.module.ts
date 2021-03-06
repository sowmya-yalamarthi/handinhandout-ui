import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './components/content/content.component';


const routes: Routes = [
  { path: 'accounts', loadChildren: () => import('./modules/accounts/accounts.module').then(x => x.AccountsModule) },
  { path: 'home-dashboard', loadChildren: () => import('./modules/home-dashboard/home-dashboard.module').then(x => x.HomeDashboardModule) },
  { path: 'books-handout', loadChildren: () => import('./modules/books-hand-out/books-hand-out.module').then(x => x.BooksHandOutModule) },
  { path: 'books-rent', loadChildren: () => import('./modules/books-rent/books-rent.module').then(x => x.BooksRentModule) },
  { path: 'books-sell', loadChildren: () => import('./modules/books-sell/books-sell.module').then(x => x.BooksSellModule) },
  { path: '', component: ContentComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
