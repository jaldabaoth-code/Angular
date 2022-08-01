import { Routes } from '@angular/router';
import { ComponentsComponent } from "./angular-quests/01-components/components.component";
import { BindingComponent } from './angular-quests/02-binding/binding.component';
import { Directives1Component } from "./angular-quests/03-directives/directives1/directives1.component";
import { Directives2Component } from "./angular-quests/03-directives/directives2/directives2.component";
import { DrivenFormsComponent} from "./angular-quests/05-driven-forms/driven-forms.component";
import { ReactiveFormsComponent } from "./angular-quests/06-reactive-forms/reactive-forms.component";
import { InputComponent } from "./angular-quests/07-input/input.component";
import { OutputComponent} from "./angular-quests/08-output/output.component";
import { UserInteractionsComponent } from "./angular-quests/09-user-interactions/user-interactions.component";
import { Services1Component} from "./angular-quests/10-services1/services1.component";
import { Services2Component} from "./angular-quests/11-services/services2.component";
import { NasaComponent } from "./angular-quests/12-nasa/nasa.component";

import { CreatePokemonComponent } from "./angular-quests/13-pokedex/components/create-pokemon/create-pokemon.component";
import { PokedexPageComponent } from "./angular-quests/13-pokedex/pokedex-page.component";


import { SignUpComponent } from './menu/sign-up/sign-up.component';
import { GameListComponent } from "./game-list/game-list.component";





const ROUTES: Routes = [
    { path: 'components', component: ComponentsComponent },
    { path: 'binding', component: BindingComponent },
    { path: 'directives1', component: Directives1Component },
    { path: 'directives2', component: Directives2Component },
    { path: 'driven-forms', component: DrivenFormsComponent },
    { path: 'reactive-forms', component: ReactiveFormsComponent },
    { path: 'input', component: InputComponent },
    { path: 'output', component: OutputComponent },
    { path: 'user-interactions', component: UserInteractionsComponent },
    { path: 'services1', component: Services1Component },
    { path: 'services2', component: Services2Component },
    { path: 'nasa', component: NasaComponent },


    { path:"pokedex", component: PokedexPageComponent },

    { path:"create", component:CreatePokemonComponent },
    { path: "", component: PokedexPageComponent },


    { path: 'sign-up', component: SignUpComponent },
    { path: 'game-list', component: GameListComponent }
];

export { ROUTES };
