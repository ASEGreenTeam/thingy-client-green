import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';

@NgModule({
    imports: [
        SharedModule,
        // RouterModule.forChild(routes)
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        Error404Component,
        Error500Component
    ],
    exports: [
        RouterModule,
        LoginComponent,
        RegisterComponent,
        Error404Component,
        Error500Component
    ]
})
export class PagesModule { }
