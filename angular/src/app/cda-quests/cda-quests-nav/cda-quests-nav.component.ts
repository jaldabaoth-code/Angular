import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'app-cda-quests-nav',
    templateUrl: './cda-quests-nav.component.html',
    styleUrls: ['./cda-quests-nav.component.css']
})
export class CdaQuestsNavComponent {
    constructor(public router: Router) { }
}
