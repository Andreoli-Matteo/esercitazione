import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Result, Root } from '../models';
import { HttpClient } from '@angular/common/http';
import { PokemonService } from '../service/models';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  prodotto!: any;
  obs!: Observable<Root>
  pokemon :Result[]=[]

  constructor(public pok:PokemonService){

  }

  cerca(){
    console.log("ciao")
    this.obs=this.pok.SearchProk()
    this.obs.subscribe((data : Root)=>{this.pokemon=data.results;
    })

  }
  vai(url:string){
    const parts =url.split('/');
    console.log(parts)
    return parts.at(-2)
  }

}
