import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { VediComponent } from './vedi/vedi.component';

const routes: Routes = [
  {path:'pokemon', component:PokemonComponent},
  {path:'vedi', component:VediComponent},
  {path:'',redirectTo:'pokemon',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
