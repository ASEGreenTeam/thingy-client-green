import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LogsListComponent } from './logs-list/logs-list.component';

const appRoutes: Routes = [
  {
    path: 'logs',
    component: LogsListComponent,
    data: { title: 'Logs list' }
  },
  {
    path: '',
    redirectTo: '/logs',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LogsListComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
