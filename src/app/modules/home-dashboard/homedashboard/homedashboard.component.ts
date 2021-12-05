import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homedashboard',
  templateUrl: './homedashboard.component.html',
  styleUrls: ['./homedashboard.component.scss']
})
export class HomedashboardComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  onClickOfBooksHandOut() {
    this.router.navigate(["/books-handout"])
  }

  onClickOfBooksRent() {
    this.router.navigate(["/books-rent"])
  }
}
