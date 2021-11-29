import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksSellRoutingModule } from './books-sell-routing.module';
import { SellBooksComponent } from './sell-books/sell-books.component';


@NgModule({
  declarations: [SellBooksComponent],
  imports: [
    CommonModule,
    BooksSellRoutingModule
  ]
})
export class BooksSellModule { }
