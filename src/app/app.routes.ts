import { Routes } from '@angular/router';
import { AuthLayouthComponent } from './auth/layouts/auth-layouth/auth-layouth.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from './auth/pages/register-page/register-page.component';

export const routes: Routes = [

    {
        path: 'auth',
        component: AuthLayouthComponent,
        children: [
            { path: 'login', component: LoginPageComponent },
            { path: 'register', component: RegisterPageComponent },
            { path: '**', redirectTo: 'login'}
        ]
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/pages/dashboard/dashboard.component').then(c => c.DashboardComponent),
        children: [
            {
                path: 'mainWall',
                title: 'Main Wall',
                loadComponent: () => import('./dashboard/layouts/wall-layout/wall-layout.component').then(c => c.WallLayoutComponent)
            }
        ]
    },
    {
        path: '',
        redirectTo: '/auth',
        pathMatch: 'full'
    }

];
