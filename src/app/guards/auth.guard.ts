import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      const token = localStorage.getItem('jwt');

      const jwtHelper = new JwtHelperService();
      if (token && !jwtHelper.isTokenExpired(token)) {
        const decodedToken = jwtHelper.decodeToken(token);
        console.log(decodedToken);
        return true;
      }
      this.router.navigate(['login']);
      return false;
  }
}
