import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
    selector: 'app-create-onomatopoeia',
    templateUrl: './create-onomatopoeia.component.html',
    styleUrls: ['./create-onomatopoeia.component.css']
})
export class CreateOnomatopoeiaComponent {
    newOnomatopoeia = new FormControl('');
    @Output()
    public sendOnomatopoeiaToParent: EventEmitter<any> = new EventEmitter();

    constructor() { }

    createOnomatopoeia(): void {
        this.sendOnomatopoeiaToParent.emit(this.newOnomatopoeia.value);
    }
}






