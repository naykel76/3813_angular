import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {

    constructor(private router: Router, private auth: AuthService) { }

    async canActivate(): Promise<boolean> {

        const isLoggedIn = Boolean(sessionStorage.getItem('loggedIn')) ?? false;

        if (!isLoggedIn) {
            this.router.navigate(['/login']);
        }

        return isLoggedIn;
    }

}

