import { Component, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Kitten } from "../common/kitten.model";

@Component({
    selector: 'app-create-kitten',
    templateUrl: './create-kitten.component.html',
    styleUrls: ['./create-kitten.component.css'],
})
export class CreateKittenComponent {
    kittenForm = this.formBuilder.group({
        name: ['', Validators.required],
        race: ['', Validators.required],
        birthdate: ['', Validators.required],
        imageLink: ['', Validators.required],
    });
    @Output()
    public sendKitten: EventEmitter<Kitten> = new EventEmitter<Kitten>();

    constructor(private formBuilder: FormBuilder) { }

    createKitten(): void {
        this.sendKitten.emit(
            new Kitten(
                this.kittenForm.controls['name'].value,
                this.kittenForm.controls['race'].value,
                this.kittenForm.controls['birthdate'].value,
                this.kittenForm.controls['imageLink'].value
            )
        );
    }
}
