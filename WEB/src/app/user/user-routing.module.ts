import { LoginedUserGuard } from './../shared/guard/logined-user.guard';
import { LoginUserComponent } from './../auth/login-user/login-user.component';
import { AuthGuard } from './../shared/guard/auth.guard';
import { UserLayoutComponent } from './../shared/layout/user-layout/user-layout.component';
import { UserComponent } from './user.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: UserLayoutComponent,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadChildren: () => import('../auth/login-user/login-user.module').then(m => m.LoginUserModule),
        canActivate: [LoginedUserGuard]
    },
];

export const UserRouting: ModuleWithProviders = RouterModule.forChild(routes);
