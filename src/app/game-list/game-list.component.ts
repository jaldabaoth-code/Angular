import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GameService} from "../game.service";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
  providers: [GameService]
})
export class GameListComponent implements OnInit {
  @Output()
  public choosedGame: any = new EventEmitter;

  gamet: any;
  game2: string = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSwa1l3P80-ML57Ln1ZKdIE6ldjTVRBPe_cFbaSEhwVrJTmsCpG";

  games: any;
  chooseGame: any;

  url = 'https://apis.wilders.dev/wild-games/games/';
  constructor(private http: GameService){}

  getGame():void{
    this.http.getData(this.url).subscribe(data=>this.games=data)
  }

  ngOnInit(){
    this.getGame();
  }

  sendGame(game: any){
    this.chooseGame = game;
  }

  eventName() {
    this.choosedGame = this.chooseGame;
/*    this.choosedGame.emit(this.chooseGame);*/
  }
}
