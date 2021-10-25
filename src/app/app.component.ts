import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hand-in-handout';

  constructor(private router : Router){

  }

  ngOnInit(){
 
  }

  navigateToLogin(){
    this.router.navigate(["/accounts"])
  }
}
