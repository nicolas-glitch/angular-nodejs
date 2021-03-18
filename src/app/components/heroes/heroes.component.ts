import { Component, OnInit } from '@angular/core';
import { HeroeService, heroe } from "../../servicios/heroes.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
  
  heroes: heroe[]=[]

  constructor( private _heroesComponent:HeroeService ) {
      
    
      
   }

  ngOnInit(): void {
    this.heroes=this._heroesComponent.getMostrarHeroes();
    console.log(this.heroes);
    
  }

}
