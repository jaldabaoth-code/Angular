import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from './utils/validation';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.registerForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
            lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
            passwordConfirmation: ['', [Validators.required]]
        },{
            validators: [Validation.match('password', 'passwordConfirmation')]
        });
    }

    // Convenience getter for easy access to form fields (access the formControls)
    get f(): { [key: string]: AbstractControl } {
        return this.registerForm.controls;
    }

    onSubmit(): void {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        console.log(JSON.stringify(this.registerForm.value, null, 2));
    }
}
