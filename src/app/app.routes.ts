import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () => import('./login/login.component')
            .then(mod => mod.LoginComponent)
    },
    {
        path: 'account',
        canActivate: [AuthGuard],
        loadComponent: () => import('./account/account.component')
            .then(mod => mod.AccountComponent)

    },
    {
        path: 'profile', loadComponent: () => import('./profile/profile.component')
            .then(mod => mod.ProfileComponent)
    },
    {
        path: 'users', loadComponent: () => import('./user/user.component')
            .then(mod => mod.UserComponent)
    }
];
