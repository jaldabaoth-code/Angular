import { Component } from '@angular/core';
import { User } from "./utils/user";

@Component({
    selector: 'app-sign-up2',
    templateUrl: './sign-up2.component.html',
    styleUrls: ['./sign-up2.component.css'],
})
export class SignUp2Component {
    user: User = new User();

    constructor() { }

    ngOnInit(): void { }

    onSubmit() {
        console.log(JSON.stringify(this.user, null, 2));
    }
}
