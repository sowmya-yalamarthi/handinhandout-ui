import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRentRoutingModule } from './books-rent-routing.module';
import { RentBooksComponent } from './rent-books/rent-books.component';


@NgModule({
  declarations: [RentBooksComponent],
  imports: [
    CommonModule,
    BooksRentRoutingModule
  ]
})
export class BooksRentModule { }
