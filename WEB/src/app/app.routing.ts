import { LoginUserComponent } from './auth/login-user/login-user.component';
import { UserLayoutComponent } from './shared/layout/user-layout/user-layout.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


export const APP_ROUTES: Routes = [
    {
        path: '',
        component: UserLayoutComponent,
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
    },
    {
        path: 'login',
        component: LoginUserComponent,
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: '**',
        component: PageErrorComponent
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

