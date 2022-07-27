import { Component } from '@angular/core';

@Component({
    selector: 'app-directives1',
    templateUrl: './directives1.component.html',
    styleUrls: ['./directives1.component.css']
})
export class Directives1Component {
    title: string = "Good morning !";
    isAdmin: boolean = true;

    constructor() { }
}
