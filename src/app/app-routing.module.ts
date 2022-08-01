import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CreatePokemonComponent} from "./angular-quests/13-pokedex/components/create-pokemon/create-pokemon.component";
import { PokedexPageComponent} from "./angular-quests/13-pokedex/pokedex-page.component";
import {AppComponent} from "./app.component";


const routes: Routes = [
  {path:"create", component:CreatePokemonComponent},
  {path: "", component: AppComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
