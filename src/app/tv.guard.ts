import { Injectable } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { state } from '@angular/animations';
@Injectable ({
  providedIn:'root'
})
export class  TvGuard implements CanActivate {


  constructor(private authService : AuthService,
    private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.authService.isAdmin()){
    return true;
  }else
    {
    this.router.navigate(['app-forbidden']);
    return false;
    }
  }  } 
;



