import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { environment as config } from 'src/environments/environment';


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
            const role = JSON.parse(localStorage.getItem('user')).role;
            if (role === 0) {
                this.router.navigate(['/dashboard']);
                subject.next(false);
            } else {
                this.router.navigate([`${config.routerLoginAdmin}`]);
                subject.next(false);
            }
        }
        return true;
    }
}