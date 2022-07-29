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
import { OutputComponent} from "./angular-quests/08-output/output.component";
import { CreateOnomatopoeiaComponent} from "./angular-quests/08-output/create-onomatopoeia/create-onomatopoeia.component";

import { CreateKittenComponent} from "./angular-quests/09-user-interactions/create-kitten/create-kitten.component";
import { UserKittenComponent} from "./angular-quests/09-user-interactions/user-kitten/user-kitten.component";
import { ListKittenComponent} from "./angular-quests/09-user-interactions/list-kitten/list-kitten.component";



import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './menu/sign-up/sign-up.component';
import { SearchComponent } from './search/search.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailList2Component } from './cocktail-list2/cocktail-list2.component';
import { PokemonListComponent } from './Pokedex/components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './Pokedex/components/pokemon-detail/pokemon-detail.component';
import { PokedexPageComponent } from './Pokedex/pages/pokedex-page/pokedex-page.component';
import { CreatePokemonComponent } from './Pokedex/pages/create-pokemon/create-pokemon.component';
import { LogInterceptor } from "../interceptor/core/log.interceptor";
import { NasaComponent } from './nasa/nasa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameComponent } from './game/game.component';




@NgModule({
    declarations: [AppComponent, ComponentsComponent, BindingComponent, Directives1Component, Directives2Component, DisplayMoviesDirective, StylesDirective, DrivenFormsComponent, DeveloperComponent, SkillComponent,
      SignUpComponent, MenuComponent, SearchComponent, CreateOnomatopoeiaComponent, CreateKittenComponent, UserKittenComponent, ListKittenComponent, CocktailListComponent, CocktailList2Component, PokemonListComponent, PokemonDetailComponent, PokedexPageComponent, CreatePokemonComponent, NasaComponent, OutputComponent, NavbarComponent, GameListComponent, GameComponent, ReactiveFormsComponent, InputComponent],
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
