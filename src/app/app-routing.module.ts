import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CreatePokemonComponent } from './Pokedex/pages/create-pokemon/create-pokemon.component';
import { PokedexPageComponent } from './Pokedex/pages/pokedex-page/pokedex-page.component';
import {AppComponent} from "./app.component";


const routes: Routes = [
  {path:"pokedex", component: PokedexPageComponent},
  {path:"create", component:CreatePokemonComponent},
  {path: "", component: AppComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
