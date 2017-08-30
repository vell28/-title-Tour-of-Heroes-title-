import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import{HeroDetailComponent} from './hero-details-components/hero.detail.component';
import{HeroesComponent} from './hero-components/hero.component';
import{HeroService} from './hero.service'
import {DashboardComponent} from './dashboard/dashboard.component'

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      }
    ]) 
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
