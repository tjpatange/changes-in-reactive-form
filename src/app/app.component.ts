import { Component, VERSION } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, ValidatorFn, AbstractControl } from '@angular/forms';
import {debounceTime, distinctUntilChanged} from "rxjs/operators";
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  testForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.testForm = this.formBuilder.group({
      firstname: '',
      lastname: '',
      email: ''
    });

    this.onValueChanges();
  }

  onValueChanges(): void {
    // this.testForm.valueChanges.subscribe(val=>{
    //   console.log(val);
    // })
     this.testForm.get('firstname').valueChanges
     .pipe(debounceTime(1000), distinctUntilChanged())
     .subscribe(val=>{
      console.log(val);
    });
  }
}
