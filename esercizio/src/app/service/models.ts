import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Root } from '../models';
import { Root1 } from '../model1';
import { Pokemoninfo } from '../model3';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  SearchProk(){
    const url =  `https://pokeapi.co/api/v2/type`
    let obsprod = this.http.get<Root>(url);
    return obsprod;
  }
  getProd(id:string |null){
    const url= `https://pokeapi.co/api/v2/type/${id}`;
    return this.http.get<Root1>(url)
  }

  getpok(id:string | null){
  const url= `https://pokeapi.co/api/v2/pokemon/${id}/`;
  return this.http.get<Pokemoninfo>(url)

  }
}