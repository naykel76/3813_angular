import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
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
}
