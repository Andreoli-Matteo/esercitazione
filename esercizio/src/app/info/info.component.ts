import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonService } from '../service/models';
import { Pokemoninfo,  } from '../model3';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  prodotto !:string | null  ;
  obsProd!:Observable<Pokemoninfo>;
  ris !: Pokemoninfo;
  constructor(public vedi:PokemonService , private route: ActivatedRoute ){ 
    this.route.paramMap.subscribe(this.getRouterParam);
  }
 
  getRouterParam = (params: ParamMap) =>
  {
    this.prodotto = params.get('id');
    this.obsProd = this.vedi.getpok(this.prodotto);
    this.obsProd.subscribe((data : Pokemoninfo)=>{this.ris=data;})
  }
}
