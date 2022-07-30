import { Component, OnInit } from '@angular/core';
import { NasaService } from "./service/nasa.service";

@Component({
    selector: 'app-nasa',
    templateUrl: './nasa.component.html',
    styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {
    public imageOfTheDay: string;
    private nasaService: NasaService;
    isShowNasa = true;

    constructor(nasaService: NasaService) {
        this.nasaService = nasaService;
    }

    ngOnInit(): void {
        this.nasaService.getImageOfTheDay().subscribe(
            (nasaImage) => {
                this.imageOfTheDay = nasaImage;
            }
        );
    }

    showHideNasa() {
        this.isShowNasa = !this.isShowNasa;
    }
}
