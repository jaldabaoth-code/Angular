import { Component } from '@angular/core';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.css']
})
export class ComponentsComponent {
    square: string;

    constructor() {
        this.square = "A B C";
    }
}
