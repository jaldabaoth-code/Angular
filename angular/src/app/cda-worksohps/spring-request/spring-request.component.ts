import { Component } from '@angular/core';
import { UserService } from "../services/user.service";

@Component({
    selector: 'app-spring-request',
    templateUrl: './spring-request.component.html',
    styleUrls: ['./spring-request.component.css']
})
export class SpringRequestComponent {
    messageFromNeedAuthenticationUrl: string;
    messageFromOpenUrl: string;
    userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    requestNeedAuthenticationUrl() {
        this.userService.authentication().subscribe((response) => {
            this.messageFromNeedAuthenticationUrl = response.message;
        },(error) => {
            console.log(error);
        });
    }

    requestOpenUrl() {
        this.userService.open().subscribe((response) => {
            this.messageFromOpenUrl = response.message;
        },(error) => {
            console.log(error);
        });
    }
}
