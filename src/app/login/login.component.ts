import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './login.component.html',
    styles: [
    ]
})
export class LoginComponent {

    username: string = 'billy27';
    password: string = 'abc123';
    message: string = '';

    constructor(private router: Router) { }

    login() {
        if (this.username == 'billy27' && this.password == 'abc123') {
            this.router.navigate(['/account'])
        } else {
            this.message = 'The email or password is incorrect.'
        }
    }

}
