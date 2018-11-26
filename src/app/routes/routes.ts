import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../core/auth/auth.guard';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { Error404Component } from './pages/error404/error404.component';
import { Error500Component } from './pages/error500/error500.component';
import { PicturesComponent } from './pictures/pictures.component';
import { ThingySettingsComponent } from './thingy-settings/thingy-settings.component';
import { ChangepwComponent } from './pages/changepw/changepw.component';

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'logs', loadChildren: './logs/logs.module#LogsModule' },
            { path: 'pictures', component: PicturesComponent },
            { path: 'settings', component: ThingySettingsComponent },
            { path: 'changepw', component: ChangepwComponent }
        ],
        canActivate: [AuthGuard]
    },

    // Not lazy-loaded routes
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: '404', component: Error404Component },
    { path: '500', component: Error500Component },
    // Not found
    { path: '**', redirectTo: 'home' }

];
