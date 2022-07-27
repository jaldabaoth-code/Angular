import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { isRequiredValidator } from './utils/idOrTitleRequired-validation';
import { yearOfReleaseValidation } from './utils/yearOfRelease-validation';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css'],
})
export class SearchMovieComponent implements OnInit {

  searchForm: FormGroup = new FormGroup({});
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  get f(): { [key: string]: AbstractControl } {
    return this.searchForm.controls;
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      identifierAndTitle: this.formBuilder.group(
        {
          identifier: [''],
          title: [''],
        },
        {
          validator: isRequiredValidator('identifier' , 'title'),
        }
      ),
      type: ['série'],
      yearOfRelease: ['', [Validators.required, yearOfReleaseValidation(1900, new Date())]],
      sheet: [''],
    });

    this.setSheet();
    this.searchForm.valueChanges.subscribe(x => {
      console.log('form value changed')
      console.log(x)
    })
  }

  setSheet() {
    this.searchForm.patchValue({
      sheet: 'courte',
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
