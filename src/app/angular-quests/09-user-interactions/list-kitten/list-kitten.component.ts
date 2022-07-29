import { Component } from '@angular/core';
import { Kitten } from "../common/kitten.model";

@Component({
    selector: 'app-list-kitten',
    templateUrl: './list-kitten.component.html',
    styleUrls: ['./list-kitten.component.css'],
})
export class ListKittenComponent {
    kittens: Kitten[] = [];
    userKittens: Kitten[] = [];

    constructor() {
        this.kittens = new Array();
        this.userKittens = new Array();
    }

    addKitten(kitten: Kitten) {
        this.kittens.push(kitten);
    }

    adoptKitten(index: number) {
        const adoptedKittens = this.kittens.splice(index, 1);
        this.userKittens = this.userKittens.concat(adoptedKittens);
    }
}
