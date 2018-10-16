import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxSelectModule } from 'ngx-select-ex'

import { SharedModule } from '../../shared/shared.module';
import { LogsListComponent } from './logs-list/logs-list.component';

const routes: Routes = [
    { path: 'list', component: LogsListComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        NgxSelectModule
    ],
    declarations: [
        LogsListComponent
    ],
    exports: [
        RouterModule
    ]
})
export class LogsModule { }
