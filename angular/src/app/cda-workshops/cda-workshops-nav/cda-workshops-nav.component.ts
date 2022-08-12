import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'app-cda-workshops-nav',
    templateUrl: './cda-workshops-nav.component.html',
    styleUrls: ['./cda-workshops-nav.component.css']
})
export class CdaWorkshopsNavComponent implements OnInit {
    constructor(public router: Router) { }

    ngOnInit(): void { }
}
