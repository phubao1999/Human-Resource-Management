import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class LoginedUserGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
        const subject = new Subject<boolean>();
        if (localStorage.getItem('auth-token')) {
            this.router.navigate(['/dashboard']);
            subject.next(false);
        }
        return true;
    }
}