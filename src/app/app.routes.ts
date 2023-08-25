import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login', loadComponent: () => import('./login/login.component')
            .then(mod => mod.LoginComponent)
    },
    {
        path: 'account', loadComponent: () => import('./account/account.component')
            .then(mod => mod.AccountComponent)
    },
    {
        path: 'users', loadComponent: () => import('./user/user.component')
            .then(mod => mod.UserComponent)
    }
];
