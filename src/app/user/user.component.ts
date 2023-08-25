import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './user.component.html',
    styles: []
})
export class UserComponent implements OnInit {

    private userService = inject(UserService);

    ngOnInit(): void {
        this.userService.getUsers().subscribe((users) => {
            console.log(users);
        });
    }
}
