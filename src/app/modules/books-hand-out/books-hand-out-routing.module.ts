import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HandoutBooksComponent } from './handout-books/handout-books.component';


const routes: Routes = [{
  path: '', component: HandoutBooksComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksHandOutRoutingModule { }
