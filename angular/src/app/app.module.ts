import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.routes";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CdaQuestsNavComponent } from './cda-quests/cda-quests-nav/cda-quests-nav.component';
import { ComponentsComponent } from './cda-quests/01-components/components.component';
import { BindingComponent } from './cda-quests/02-binding/binding.component';
import { Directives1Component } from './cda-quests/03-directives/directives1/directives1.component';
import { Directives2Component } from './cda-quests/03-directives/directives2/directives2.component';
import { DisplayMoviesDirective } from './cda-quests/03-directives/directives2/display-movies.directive';
import { StylesDirective } from './cda-quests/03-directives/directives2/styles.directive';
import { RouterComponent } from './cda-quests/04-router/router.component';
import { DrivenFormsComponent } from './cda-quests/05-driven-forms/driven-forms.component';
import { ReactiveFormsComponent } from './cda-quests/06-reactive-forms/reactive-forms.component';
import { InputComponent } from './cda-quests/07-input/input.component';
import { DeveloperComponent } from "./cda-quests/07-input/developer/developer.component";
import { SkillComponent } from "./cda-quests/07-input/skill/skill.component";
import { OutputComponent } from "./cda-quests/08-output/output.component";
import { CreateOnomatopoeiaComponent } from "./cda-quests/08-output/create-onomatopoeia/create-onomatopoeia.component";
import { UserInteractionsComponent } from './cda-quests/09-user-interactions/user-interactions.component';
import { CreateKittenComponent } from "./cda-quests/09-user-interactions/create-kitten/create-kitten.component";
import { UserKittenComponent } from "./cda-quests/09-user-interactions/user-kitten/user-kitten.component";
import { ListKittenComponent } from "./cda-quests/09-user-interactions/list-kitten/list-kitten.component";
import { Services1Component } from "./cda-quests/10-services1/services1.component";
import { Services2Component } from "./cda-quests/11-services2/services2.component";
import { NasaComponent } from "./cda-quests/12-nasa/nasa.component";
import { PokedexPageComponent } from "./cda-quests/13-pokedex/pokedex-page.component";
import { PokedexNavComponent } from './cda-quests/13-pokedex/components/pokedex-nav/pokedex-nav.component';
import { CreatePokemonComponent } from "./cda-quests/13-pokedex/components/create-pokemon/create-pokemon.component";
import { PokemonListComponent} from "./cda-quests/13-pokedex/components/pokemon-list/pokemon-list.component";
import { PokemonDetailComponent } from "./cda-quests/13-pokedex/components/pokemon-detail/pokemon-detail.component";
import { LogInterceptor } from "./cda-quests/17-interceptor/core/log.interceptor";
import { GamesListComponent } from './cda-checkpoint-2/games-list/games-list.component';
import { GameComponent } from './cda-checkpoint-2/game/game.component';
import { SignUpComponent } from './tutorials/reactive-forms/sign-up/sign-up.component';
import { SpringRequestComponent } from './cda-worksohps/spring-request/spring-request.component';
import { AuthenticationComponent } from './cda-worksohps/authentication/authentication.component';

@NgModule({
    declarations: [AppComponent, NavbarComponent, HomeComponent, CdaQuestsNavComponent, ComponentsComponent, BindingComponent, Directives1Component, Directives2Component, DisplayMoviesDirective, StylesDirective, RouterComponent, DrivenFormsComponent, ReactiveFormsComponent, InputComponent, DeveloperComponent, SkillComponent, OutputComponent, CreateOnomatopoeiaComponent, UserInteractionsComponent, CreateKittenComponent, UserKittenComponent, ListKittenComponent, Services1Component, Services2Component, NasaComponent, PokedexPageComponent, PokedexNavComponent, CreatePokemonComponent, PokemonListComponent, PokemonDetailComponent, GamesListComponent, GameComponent, SignUpComponent, SpringRequestComponent, AuthenticationComponent],
    imports: [HttpClientModule, BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(ROUTES, {onSameUrlNavigation: 'reload'}), AppRoutingModule],
    exports: [RouterModule],
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
