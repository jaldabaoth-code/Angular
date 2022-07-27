import {Component, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  @Input()
  public game: any;
  private service: HttpClient;

  constructor(param_service: HttpClient){
    this.service  =  param_service;
  }

}
