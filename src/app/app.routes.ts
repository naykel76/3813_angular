import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login', loadComponent: () => import('./login/login.component')
            .then(mod => mod.LoginComponent)
    },
    {
        path: 'account', loadComponent: () => import('./account/account.component')
            .then(mod => mod.AccountComponent)
    }

    // {path: 'admin', loadChildren: () => import('./admin/routes').then(mod => mod.ADMIN_ROUTES)},
];

// In admin/routes.ts:
// export const ADMIN_ROUTES: Route[] = [
//     {path: 'home', component: AdminHomeComponent},
//     {path: 'users', component: AdminUsersComponent},
//     // ...
//   ];


// const appRoutes: Routes = [
//     { path: 'crisis-center', component: CrisisListComponent },
//     { path: 'hero/:id',      component: HeroDetailComponent },
//     {
//       path: 'heroes',
//       component: HeroListComponent,
//       data: { title: 'Heroes List' }
//     },
//     { path: '',
//       redirectTo: '/heroes',
//       pathMatch: 'full'
//     },
//     { path: '**', component: PageNotFoundComponent }
//   ];
