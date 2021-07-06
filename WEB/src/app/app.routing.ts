import { AdminLayoutComponent } from './shared/layout/admin-layout/admin-layout.component';
import { LoginUserComponent } from './auth/login-user/login-user.component';
import { UserLayoutComponent } from './shared/layout/user-layout/user-layout.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { environment as config } from 'src/environments/environment';


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
        path: `${config.routerAdmin}`,
        component: AdminLayoutComponent,
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: '**',
        component: PageErrorComponent
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

