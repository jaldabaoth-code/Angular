import { Component } from '@angular/core';

@Component({
    selector: 'app-01-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.css']
})
export class ComponentsComponent {
    square : string;

    constructor() {
        this.square = "A B C";
    }
}
