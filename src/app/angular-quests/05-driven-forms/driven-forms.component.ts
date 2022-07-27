import { Component } from '@angular/core';
import { User } from "./utils/user";

@Component({
    selector: 'app-05-driven-forms',
    templateUrl: './driven-forms.component.html',
    styleUrls: ['./driven-forms.component.css'],
})
export class DrivenFormsComponent {
    user: User = new User();

    constructor() { }

    onSubmit() {
        console.log(JSON.stringify(this.user, null, 2));
    }
}
