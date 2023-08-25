import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'http-testing',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="container maxw-sm py space-x">
        <button (click)="jsonResponse()" class="btn red">JSON Response</button>
        <button (click)="validatedResponse(true)" class="btn red">Return Success</button>
        <button (click)="validatedResponse(false)" class="btn red">Return Fail</button>
        <button (click)="getUsers()" class="btn red">JSON Users</button>
    </div>
    `
})
export class HttpTestingComponent {

    private baseURL = 'http://localhost:3232'

    private http = inject(HttpClient);

    jsonResponse() {
        this.http.get<JSON>(`${this.baseURL}/tests/json-response`)
            .subscribe((data) => console.log(data));
    }

    validatedResponse(isTrue: boolean) {
        this.http.post(`${this.baseURL}/tests/validated-response`, { isTrue })
            .subscribe((data) => console.log(data));
    }

    getUsers() {
        this.http.get(`${this.baseURL}/api/users/list`)
            .subscribe((data) => console.log(data));
    }

}

