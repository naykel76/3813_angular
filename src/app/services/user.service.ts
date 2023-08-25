import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private baseURL = 'http://localhost:3232'

    user: any = {
        username: 'billy27',
        password: 'abc123',
        email: 'billy@example.com'
    }

    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get(`${this.baseURL}/api/users`);
    }

}
