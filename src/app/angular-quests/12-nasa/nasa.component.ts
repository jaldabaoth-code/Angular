import { Component, OnInit } from '@angular/core';
import { NasaService } from "./service/nasa.service";

@Component({
    selector: 'app-nasa',
    templateUrl: './nasa.component.html',
    styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {
    public imgOfTheDay: string;
    private service: NasaService;

    constructor(public param_service: NasaService) {
        this.service = param_service;
    }

    ngOnInit(): void {
      this.service.getImageOfTheDay().subscribe(
        (nasaImg) => {
          this.imgOfTheDay = nasaImg;
        }
      );
    }

    isShowNasa = true;
    AfficherMasquerNasa() {
      this.isShowNasa = !this.isShowNasa;
    }
}
