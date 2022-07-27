import { Component, OnInit } from  '@angular/core';
import {CocktailService} from "./service/cocktail.service";
import {Cocktail} from "./common/cocktail.model";


@Component({
  selector: 'app-cocktail-list2',
  templateUrl: './cocktail-list2.component.html',
  styleUrls: ['./cocktail-list2.component.css']
})
export  class  CocktailList2Component  implements  OnInit {

  public  title: string  =  '';
  private service: CocktailService;
  public cocktails: Cocktail[];

  constructor(public param_service:CocktailService){
    this.service  =  param_service;
  }

  public  ngOnInit():void{
    this.service.getCocktails().subscribe(
      (cocktailsData) => {
        this.cocktails  =  cocktailsData;
      }
    );
  }
}


