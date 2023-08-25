import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-account',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './account.component.html',
    styles: [
    ]
})
export class AccountComponent {

    user: any = {};

    ngOnInit(): void {
        this.user = this.getUserData();

        console.log(this.user);

    }

    getUserData() {
        return {
            username: sessionStorage.getItem('username'),
            birthdate: sessionStorage.getItem('birthdate'),
            age: sessionStorage.getItem('age'),
            email: sessionStorage.getItem('email')
        }
    }

}
