import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentBooksComponent } from './rent-books/rent-books.component';


const routes: Routes = [{
  path: '', component: RentBooksComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRentRoutingModule { }
