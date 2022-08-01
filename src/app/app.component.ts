import { Component } from '@angular/core';
import {NasaService} from "./angular-quests/12-nasa/services/nasa.service";
import {PokedexService} from "./angular-quests/13-pokedex/shared/services/pokedex.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  game: any;
  game2: string = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSwa1l3P80-ML57Ln1ZKdIE6ldjTVRBPe_cFbaSEhwVrJTmsCpG";

  title = 'Bonjour !';
/*  public imgOfTheDay: string;
  private services: NasaService;*/

/*  public onomatopoeias: string[] = [];*/

  constructor(public param_service: NasaService, private pokedexService : PokedexService) {
    //this.services = param_service;
  }

  public ngOnInit():void{
/*    this.services.getImageOfTheDay().subscribe(
      (nasaImg) => {
        this.imgOfTheDay = nasaImg;
      }
    );*/
/*    this.pokedexService.getPokes();*/
  }

/*  onReceiveNewOnomatopia($event: string) {
    this.onomatopoeias.push($event);
  }*/

/*  /!* Afficher Quete 08 - Output *!/
  isShowOutput = true;
  AfficherMasquerOutput() {
    this.isShowOutput = !this.isShowOutput;
  }*/

/*  /!* Afficher Quete 12 - Nasa *!/
  isShowNasa = true;
  AfficherMasquerNasa() {
    this.isShowNasa = !this.isShowNasa;
  }*/
}
