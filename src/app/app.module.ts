import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';

const appRoutes: Routes = [
  {
    path: 'foos',
    component: FooComponent,
    data: { title: 'Foo list' }
  },
  {
    path: '',
    redirectTo: '/foos',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FooComponent
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
