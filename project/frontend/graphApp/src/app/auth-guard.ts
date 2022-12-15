import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map, catchError, of } from "rxjs";
import { AuthService } from "./auth/auth.service";
@Injectable({
    'providedIn': 'root'
  })
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.authService.isLoggedIn().pipe(map(res => {
            return true;
        }), catchError(() => {
            return of(this.router.createUrlTree(['/home']));
        }));

    }

}