import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellBooksComponent } from './sell-books/sell-books.component';


const routes: Routes = [{
  path: '', component: SellBooksComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksSellRoutingModule { }
