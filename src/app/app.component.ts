import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpTestingComponent } from './http-testing.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterLink, HttpTestingComponent],
    templateUrl: './app.component.html',
    styles: []
})
export class AppComponent {

    title = '3813_angular';
    loggedIn: boolean;

    private router = inject(Router);

    constructor() {
        this.loggedIn = Boolean(sessionStorage.getItem('loggedIn')) ?? false;
    }

    logout() {
        sessionStorage.clear();
        this.router.navigate(['/']);
    }
}
