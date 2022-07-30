import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.routes";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './angular-quests/01-components/components.component';
import { BindingComponent } from './angular-quests/02-binding/binding.component';
import { Directives1Component } from './angular-quests/03-directives/directives1/directives1.component';
import { Directives2Component } from './angular-quests/03-directives/directives2/directives2.component';
import { DisplayMoviesDirective } from './angular-quests/03-directives/directives2/display-movies.directive';
import { StylesDirective } from './angular-quests/03-directives/directives2/styles.directive';
import { DrivenFormsComponent } from './angular-quests/05-driven-forms/driven-forms.component';
import { ReactiveFormsComponent } from './angular-quests/06-reactive-forms/reactive-forms.component';
import { InputComponent } from './angular-quests/07-input/input.component';
import { DeveloperComponent } from "./angular-quests/07-input/developer/developer.component";
import { SkillComponent } from "./angular-quests/07-input/skill/skill.component";
import { OutputComponent } from "./angular-quests/08-output/output.component";
import { CreateOnomatopoeiaComponent } from "./angular-quests/08-output/create-onomatopoeia/create-onomatopoeia.component";
import { UserInteractionsComponent } from './angular-quests/09-user-interactions/user-interactions.component';
import { CreateKittenComponent} from "./angular-quests/09-user-interactions/create-kitten/create-kitten.component";
import { UserKittenComponent} from "./angular-quests/09-user-interactions/user-kitten/user-kitten.component";
import { ListKittenComponent} from "./angular-quests/09-user-interactions/list-kitten/list-kitten.component";
import { Services1Component } from "./angular-quests/10-services1/services1.component";
import { Services2Component } from "./angular-quests/11-services/services2.component";
import { NasaComponent } from "./angular-quests/12-nasa/nasa.component";


import { PokemonListComponent} from "./angular-quests/13-pokedex/components/pokemon-list/pokemon-list.component";
import { PokemonDetailComponent } from "./angular-quests/13-pokedex/components/pokemon-detail/pokemon-detail.component";
import { PokedexPageComponent } from "./angular-quests/13-pokedex/pages/pokedex-page/pokedex-page.component";
import { CreatePokemonComponent } from "./angular-quests/13-pokedex/pages/create-pokemon/create-pokemon.component";



import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './menu/sign-up/sign-up.component';
import { LogInterceptor } from "../interceptor/core/log.interceptor";
import { NavbarComponent } from './navbar/navbar.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameComponent } from './game/game.component';
import { PokedexComponent } from './pokedex/pokedex.component';





@NgModule({
    declarations: [AppComponent, ComponentsComponent, BindingComponent, Directives1Component, Directives2Component, DisplayMoviesDirective, StylesDirective, DrivenFormsComponent, ReactiveFormsComponent, InputComponent, DeveloperComponent, SkillComponent, OutputComponent, CreateOnomatopoeiaComponent, UserInteractionsComponent, CreateKittenComponent, UserKittenComponent, ListKittenComponent, Services1Component, Services2Component, NasaComponent,
      SignUpComponent, MenuComponent, PokemonListComponent, PokemonDetailComponent, PokedexPageComponent, CreatePokemonComponent, NavbarComponent, GameListComponent, GameComponent, PokedexComponent],
    imports: [HttpClientModule, BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(ROUTES), AppRoutingModule],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LogInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
