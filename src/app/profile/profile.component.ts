import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

    user: any = {};

    ngOnInit(): void {
        this.user = this.getUserData();

        console.log(this.user);

    }

    getUserData(){
        return {
            username: sessionStorage.getItem('username'),
            birthdate: sessionStorage.getItem('birthdate'),
            age: sessionStorage.getItem('age'),
            email: sessionStorage.getItem('email')
        }
    }

    update() {
        // don't judge me, it works!
        sessionStorage.setItem('username', this.user.username);
        sessionStorage.setItem('birthdate', this.user.birthdate);
        sessionStorage.setItem('age', this.user.age);
        sessionStorage.setItem('email', this.user.email);
    }
}
