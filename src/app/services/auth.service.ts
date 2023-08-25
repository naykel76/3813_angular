import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private baseURL = 'http://localhost:3232'

    user: any = {
        username: 'billy27',
        password: 'abc123',
        email: 'billy@example.com'
    }

    private http = inject(HttpClient);

    login(username: string, password: string) {
        return this.http.post<any>(`${this.baseURL}/api/auth/login`, { username, password });
    }

}
