import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ServiceComponent } from './service/service.component';
import { VediComponent } from './vedi/vedi.component';

@NgModule({
  declarations: [
    AppComponent,
    
    PokemonComponent,
         ServiceComponent,
         VediComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
