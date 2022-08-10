import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ComponentsComponent } from "./cda-quests/01-components/components.component";
import { BindingComponent } from './cda-quests/02-binding/binding.component';
import { Directives1Component } from "./cda-quests/03-directives/directives1/directives1.component";
import { Directives2Component } from "./cda-quests/03-directives/directives2/directives2.component";
import { RouterComponent } from './cda-quests/04-router/router.component';
import { DrivenFormsComponent} from "./cda-quests/05-driven-forms/driven-forms.component";
import { ReactiveFormsComponent } from "./cda-quests/06-reactive-forms/reactive-forms.component";
import { InputComponent } from "./cda-quests/07-input/input.component";
import { OutputComponent} from "./cda-quests/08-output/output.component";
import { UserInteractionsComponent } from "./cda-quests/09-user-interactions/user-interactions.component";
import { Services1Component } from "./cda-quests/10-services1/services1.component";
import { Services2Component } from "./cda-quests/11-services2/services2.component";
import { NasaComponent } from "./cda-quests/12-nasa/nasa.component";
import { CreatePokemonComponent } from "./cda-quests/13-pokedex/components/create-pokemon/create-pokemon.component";
import { PokedexPageComponent } from "./cda-quests/13-pokedex/pokedex-page.component";
import { GamesListComponent } from "./cda-checkpoint-2/games-list/games-list.component";
import { SignUpComponent } from './tutorials/reactive-forms/sign-up/sign-up.component';
import { SpringRequestComponent } from "./cda-workshops/spring-angular-security/spring-request/spring-request.component";
import { AuthenticationComponent } from "./cda-workshops/spring-angular-security/authentication/authentication.component";
import { CalculatorComponent } from "./cda-workshops/calculator/calculator.component";
import { Calculator2Component } from "./cda-workshops/calculator2/calculator2.component";

const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'components', component: ComponentsComponent },
    { path: 'binding', component: BindingComponent },
    { path: 'directives1', component: Directives1Component },
    { path: 'directives2', component: Directives2Component },
    { path: 'router', component: RouterComponent },
    { path: 'driven-forms', component: DrivenFormsComponent },
    { path: 'reactive-forms', component: ReactiveFormsComponent },
    { path: 'input', component: InputComponent },
    { path: 'output', component: OutputComponent },
    { path: 'user-interactions', component: UserInteractionsComponent },
    { path: 'services1', component: Services1Component },
    { path: 'services2', component: Services2Component },
    { path: 'nasa', component: NasaComponent },
    { path: 'pokedex', component: PokedexPageComponent },
    { path: 'create-pokemon', component: CreatePokemonComponent },
    { path: 'games-list', component: GamesListComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'spring-angular-security', component: SpringRequestComponent },
    { path: 'authentication', component: AuthenticationComponent },
    { path: 'calculator', component: CalculatorComponent },
    { path: 'calculator2', component: Calculator2Component }
];
export { ROUTES };
