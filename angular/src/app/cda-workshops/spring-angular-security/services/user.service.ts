import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

const API_URL = 'http://localhost:8080/api/';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    username: string;
    password: string;

    constructor(private httpClient: HttpClient) { }

    authentication() {
        let httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                authorization: 'Basic ' + btoa(`${this.username}:${this.password}`)
            })
        };
        return this.httpClient.get<any>(API_URL + "needAuthentication", httpOptions);
    }

    open() {
        return this.httpClient.get<any>(API_URL + "open");
    }
}
