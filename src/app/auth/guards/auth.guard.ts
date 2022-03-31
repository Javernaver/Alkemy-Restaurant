import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {


  constructor(
    private authService: AuthService, 
    private router: Router) {
    
   }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return this.authService.verifyAuth().pipe( // se verifica la autenticacion segun el tipo a traves del auth service y se hace tap para comprobar
        tap( isAuth => {
          if (!isAuth){
            
            this.authService.invalidAccess();
            this.router.navigate(['/auth/login']);
            return false;
          }
          return true;
        })
      );


  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      
      return this.authService.verifyAuth().pipe( // se verifica la autenticacion segun el tipo a traves del auth service y se hace tap para comprobar
        tap( isAuth => {
          if (!isAuth){
            
            this.authService.invalidAccess();
            this.router.navigate(['/auth/login']);
            return false;
          }
          return true;
        })
      );
  }
  
}
