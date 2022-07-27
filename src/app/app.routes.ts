import { Routes } from '@angular/router';
import { ComponentsComponent } from "./angular-quests/01-components/components.component";
import { BindingComponent } from './angular-quests/02-binding/binding.component';
import { Directives1Component } from "./angular-quests/03-directives/directives1/directives1.component";
import { Directives2Component } from "./angular-quests/03-directives/directives2/directives2.component";
import { DrivenFormsComponent} from "./angular-quests/05-driven-forms/driven-forms.component";
import { ReactiveFormsComponent } from "./angular-quests/06-reactive-forms/reactive-forms.component";

import { SignUpComponent } from './menu/sign-up/sign-up.component';
import { SearchComponent } from "./search/search.component";
import { DeveloperComponent} from "./Input/developer/developer.component";
import { ListKittenComponent} from "./kitten-story/list-kitten/list-kitten.component";
import { CocktailListComponent} from "./cocktail-list/cocktail-list.component";
import { CocktailList2Component} from "./cocktail-list2/cocktail-list2.component";
import { CreatePokemonComponent } from './Pokedex/pages/create-pokemon/create-pokemon.component';
import { PokedexPageComponent } from './Pokedex/pages/pokedex-page/pokedex-page.component';
import { NasaComponent } from "./nasa/nasa.component";
import { OutputComponent } from "./output/output.component";
import { GameListComponent } from "./game-list/game-list.component";
import {InputComponent} from "./angular-quests/07-input/input.component";



const ROUTES: Routes = [
    { path: 'components', component: ComponentsComponent },
    { path: 'binding', component: BindingComponent },
    { path: 'directives1', component: Directives1Component },
    { path: 'directives2', component: Directives2Component },
    { path: 'driven-forms', component: DrivenFormsComponent },
    { path: 'reactive-forms', component: ReactiveFormsComponent },
    { path: 'input', component: InputComponent },

    { path: 'sign-up', component: SignUpComponent },
    { path: '', component: BindingComponent },
    { path: 'search', component: SearchComponent },
    { path: 'kittens', component: ListKittenComponent },
    { path: 'cocktails', component: CocktailListComponent },
    { path: 'cocktails2', component: CocktailList2Component },
    { path: 'nasa', component: NasaComponent },
    { path: 'output', component: OutputComponent },
    { path: 'game-list', component: GameListComponent },
    { path:"pokedex", component: PokedexPageComponent },
    { path:"create", component:CreatePokemonComponent },
    { path: "", component: PokedexPageComponent }
];

export { ROUTES };
