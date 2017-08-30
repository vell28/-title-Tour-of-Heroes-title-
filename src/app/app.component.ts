import { Component} from '@angular/core';
import{HeroDetailComponent} from './hero-details-components/hero.detail.component'
import {HeroesComponent} from './hero-components/hero.component'
import {DashboardComponent} from './dashboard/dashboard.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
}
