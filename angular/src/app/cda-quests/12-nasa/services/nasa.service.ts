import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from  "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class NasaService {
    private service: HttpClient;

    constructor(paramService: HttpClient) {
        this.service = paramService;
    }

    public  getImageOfTheDay(): Observable<string> {
        const observableNasa: Observable<any> = this.service.get("https://api.nasa.gov/planetary/apod?api_key=mxe3ckovSulRzFuRjVCUxSUgahUzuQssTzMeagqR");
        const treatment = (paramData: any) => {
            return paramData.url as string;
        };
        return observableNasa.pipe(map(treatment));
    }
}
