import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ComponentsComponent } from "./cda-quests/01-components/components.component";
import { BindingComponent } from './cda-quests/02-binding/binding.component';
import { Directives1Component } from "./cda-quests/03-directives1/directives1.component";
import { Directives2Component } from "./cda-quests/03-directives2/directives2.component";
import { RouterComponent } from './cda-quests/04-router/router.component';
import { DrivenFormsComponent} from "./cda-quests/05-driven-forms/driven-forms.component";
import { ReactiveFormsComponent } from "./cda-quests/06-reactive-forms/reactive-forms.component";
import { InputComponent } from "./cda-quests/07-input/input.component";
import { OutputComponent} from "./cda-quests/08-output/output.component";
import { UserInteractionsComponent } from "./cda-quests/09-user-interactions/user-interactions.component";
import { Services1Component } from "./cda-quests/10-services1/services1.component";
import { Services2Component } from "./cda-quests/11-services2/services2.component";
import { NasaComponent } from "./cda-quests/12-nasa/nasa.component";
import { PokedexComponent } from "./cda-quests/13-pokedex/pokedex.component";
import { CreatePokemonComponent } from "./cda-quests/13-pokedex/components/create-pokemon/create-pokemon.component";
import { Checkpoint2Component } from "./cda-checkpoints/checkpoint-2/checkpoint2.component";
import { SpringAngularSecurityComponent } from "./cda-workshops/spring-angular-security/spring-angular-security.component";
import { AuthenticationComponent } from "./cda-workshops/spring-angular-security/authentication/authentication.component";
import { CalculatorWorkshopComponent } from "./cda-workshops/calculator-workshop/calculator-workshop.component";
import { ReactiveFormTutorialComponent } from "./tutorials/reactive-form-tutorial/reactive-form-tutorial.component";
import { CalculatorTutorialComponent } from "./tutorials/calculator-tutorial/calculator-tutorial.component";
import { TicTacToeTutorialComponent } from "./tutorials/tic-tac-toe-tutorial/tic-tac-toe-tutorial.component";

const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'components', component: ComponentsComponent },
    { path: 'binding', component: BindingComponent },
    { path: 'directives-1', component: Directives1Component },
    { path: 'directives-2', component: Directives2Component },
    { path: 'router', component: RouterComponent },
    { path: 'driven-forms', component: DrivenFormsComponent },
    { path: 'reactive-form', component: ReactiveFormsComponent },
    { path: 'input', component: InputComponent },
    { path: 'output', component: OutputComponent },
    { path: 'user-interactions', component: UserInteractionsComponent },
    { path: 'services-1', component: Services1Component },
    { path: 'services-2', component: Services2Component },
    { path: 'nasa', component: NasaComponent },
    { path: 'pokedex', component: PokedexComponent },
    { path: 'create-pokemon', component: CreatePokemonComponent },
    { path: 'checkpoint-2', component: Checkpoint2Component },
    { path: 'spring-angular-security', component: SpringAngularSecurityComponent },
    { path: 'authentication', component: AuthenticationComponent },
    { path: 'calculator-workshop', component: CalculatorWorkshopComponent },
    { path: 'reactive-form-tutorial', component: ReactiveFormTutorialComponent },
    { path: 'calculator-tutorial', component: CalculatorTutorialComponent },
    { path: 'tic-tac-toe-tutorial', component: TicTacToeTutorialComponent }
];
export { ROUTES };
