import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
    registerForm: FormGroup;
    userService: UserService;

    constructor(userService: UserService, private router: Router) {
        this.userService = userService;
    }

    ngOnInit(): void {
        this.registerForm = new FormGroup({
            username: new FormControl(''),
            password: new FormControl('')
        });
    }

    onSubmit(): void {
        this.userService.username = this.registerForm.value.username;
        this.userService.password= this.registerForm.value.username;
        this.router.navigate(['/spring-angular-security']);
    }
}
