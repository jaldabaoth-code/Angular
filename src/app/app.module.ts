;
import { Directives1Component } from './angular-quests/03-directives/directives1/directives1.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './menu/sign-up/sign-up.component';
import { BindingComponent } from './angular-quests/02-binding/binding.component';
import {ROUTES} from "./app.routes";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { SignUp2Component } from './angular-quests/sign-up2/sign-up2.component';
import { SearchComponent } from './search/search.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { SkillComponent } from './Input/skill/skill.component';
import { DeveloperComponent } from './Input/developer/developer.component';
import { CreateOnomatopiaComponent } from './create-onomatopia/create-onomatopia.component';
import { CreateKittenComponent } from './kitten-story/create-kitten/create-kitten.component';
import { UserKittenComponent } from './kitten-story/user-kitten/user-kitten.component';
import { ListKittenComponent } from './kitten-story/list-kitten/list-kitten.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailList2Component } from './cocktail-list2/cocktail-list2.component';
import { PokemonListComponent } from './Pokedex/components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './Pokedex/components/pokemon-detail/pokemon-detail.component';
import { PokedexPageComponent } from './Pokedex/pages/pokedex-page/pokedex-page.component';
import { CreatePokemonComponent } from './Pokedex/pages/create-pokemon/create-pokemon.component';
import {LogInterceptor} from "../interceptor/core/log.interceptor";
import { NasaComponent } from './nasa/nasa.component';
import { OutputComponent } from './output/output.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameComponent } from './game/game.component';
import { ComponentsComponent } from './angular-quests/01-components/components.component';
import { Directives2Component } from './angular-quests/03-directives/directives2/directives2.component';
import { DisplayMoviesDirective } from './angular-quests/03-directives/directives2/display-movies.directive';
import { StylesDirective } from './angular-quests/03-directives/directives2/styles.directive';

@NgModule({
  declarations: [AppComponent, BindingComponent, SignUpComponent, MenuComponent, SearchMovieComponent, SignUp2Component, SearchComponent, SkillComponent, DeveloperComponent, CreateOnomatopiaComponent, CreateKittenComponent, UserKittenComponent, ListKittenComponent, CocktailListComponent, CocktailList2Component, PokemonListComponent, PokemonDetailComponent, PokedexPageComponent, CreatePokemonComponent, NasaComponent, OutputComponent, NavbarComponent, GameListComponent, GameComponent, ComponentsComponent, Directives1Component, Directives2Component, DisplayMoviesDirective, StylesDirective],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), FormsModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule],
  /* quete 17 interceptors */
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
