import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {Hero} from '../hero';
import{HeroDetailComponent} from '../hero-details-components/hero.detail.component'
import{HeroService} from '../hero.service'

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'hero.component.html',
    styleUrls: ['hero.component.css']
})

export class HeroesComponent{
    constructor(
        private heroService: HeroService,
        private router: Router,
        
      ) {
        setTimeout(()=>{
          for(let key in this.heroes){
            this.collection.push(this.heroes[key]);
          }
        })        
      }
      selectedHero: Hero;
      heroes: Hero[];
      collection: any = [];
      ngOnInit(){
        this.getHeroes();
      }
    
      getHeroes(){
        this.heroService.getHeroes()
          .then(heroes => this.heroes = heroes);
      }

      gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
      }
    
      onSelect(hero: Hero){ this.selectedHero = hero; }
}