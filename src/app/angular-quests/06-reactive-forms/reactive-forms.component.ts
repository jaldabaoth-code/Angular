import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isRequiredValidator } from "./utils/idOrTitleRequired-validation";
import { yearOfReleaseValidation } from "./utils/yearOfRelease-validation";

@Component({
    selector: 'app-reactive-forms',
    templateUrl: './reactive-forms.component.html',
    styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
    searchForm: FormGroup = new FormGroup({ });
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    get f(): { [key: string]: AbstractControl } {
        return this.searchForm.controls;
    }

    ngOnInit(): void {
        this.searchForm = this.formBuilder.group({
            identifierAndTitle: this.formBuilder.group({
                identifier: [''],
                title: [''],
            },{
                validator: isRequiredValidator('identifier' , 'title'),
            }),
            type: ['series'],
            releaseYear: ['', [Validators.required, yearOfReleaseValidation(1900, new Date())]],
            sheet: [''],
        });
        this.setSheet();
        this.searchForm.valueChanges.subscribe(next => {
            console.log('form values changed');
            console.log(next);
        })
    }

    setSheet() {
        this.searchForm.patchValue({
            sheet: 'short',
        });
    }

    onSubmit() {
        this.submitted = true;
        if (this.searchForm.invalid) {
              return;
        }
        console.log(JSON.stringify(this.searchForm.value, null, 2));
    }
}
