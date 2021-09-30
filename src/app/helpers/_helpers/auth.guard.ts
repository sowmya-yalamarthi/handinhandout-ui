import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AppserviceService } from 'src/app/services/appservice.service';



@Injectable()
export class AuthGuard implements CanActivate { 
  
  constructor(
      private router:Router,
      private authenticationService: AppserviceService
      ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const currentUser = this.authenticationService.currentUser;
   if (currentUser) {
     
     return true;
   }
   this.router.navigate(['']);
   return false;
    
  }
  
}
