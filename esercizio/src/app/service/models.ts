import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Root } from '../models';


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
}