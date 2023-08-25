import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
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
export class LoginComponent implements OnInit {

    username: string = 'billy27';
    password: string = 'abc123';
    message: string = '';

    private authService = inject(AuthService);
    private router = inject(Router);

    ngOnInit(): void { }

    login() {
        this.authService.login(this.username, this.password).subscribe(data => {
            data.valid
                ? this.handleLogin(data)
                : this.message = 'Invalid username or password';
        });
    }

    handleLogin(data: any) {

        // don't judge me, it works!
        sessionStorage.setItem('username', data.user.username);
        sessionStorage.setItem('birthdate', data.user.birthdate);
        sessionStorage.setItem('age', data.user.age);
        sessionStorage.setItem('email', data.user.email);
        sessionStorage.setItem('loggedIn', 'true');
        this.router.navigate(['/account']);
    }

}
