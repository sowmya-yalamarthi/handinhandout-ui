import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksHandOutRoutingModule } from './books-hand-out-routing.module';
import { HandoutBooksComponent } from './handout-books/handout-books.component';


@NgModule({
  declarations: [HandoutBooksComponent],
  imports: [
    CommonModule,
    BooksHandOutRoutingModule
  ]
})
export class BooksHandOutModule { }
