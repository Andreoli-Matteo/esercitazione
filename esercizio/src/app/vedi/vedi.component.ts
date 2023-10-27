import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Result, Root } from '../models';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { PokemonService } from '../service/models';
import { Pokemon, Root1 } from '../model1';

@Component({
  selector: 'app-vedi',
  templateUrl: './vedi.component.html',
  styleUrls: ['./vedi.component.css']
})
export class VediComponent {
  prodotto !:string | null  ;
  obsProd!:Observable<Root1>;
  ris :Pokemon[]=[];
  constructor(public vedi:PokemonService , private route: ActivatedRoute ){ 
    this.route.paramMap.subscribe(this.getRouterParam);
  }
 
  getRouterParam = (params: ParamMap) =>
  {
    this.prodotto = params.get('path');
    this.obsProd = this.vedi.getProd(this.prodotto);
    this.obsProd.subscribe((data : Root1)=>{this.ris=data.pokemon;})
  }
  vai(url:string){
    const parts =url.split('/');
    console.log(parts)
    return parts.at(-2)
  }





 }

