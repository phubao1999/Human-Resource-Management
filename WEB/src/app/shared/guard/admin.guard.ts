import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
        const subject = new Subject<boolean>();
        const role = JSON.parse(localStorage.getItem('user')).role;
        if (localStorage.getItem('auth-token') && role !== 1) {
            this.router.navigate(['login']);
            subject.next(false);
        }
        return true;
    }
}