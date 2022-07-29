import { Component } from '@angular/core';

@Component({
    selector: 'app-output',
    templateUrl: './output.component.html',
    styleUrls: ['./output.component.css']
})
export class OutputComponent {
    public onomatopoeias: string[] = [];
    isShowOutput = true;

    constructor() { }

    receiveNewOnomatopoeia($event: string) {
        this.onomatopoeias.push($event);
    }

    showHideOutput() {
        this.isShowOutput = !this.isShowOutput;
    }
}
