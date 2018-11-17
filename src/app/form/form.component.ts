import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { from } from 'rxjs';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  constructor(fb: FormBuilder) {

    this.form = fb.group({
      name: ['', Validators.required],
      email: ['']
    });
   }

  ngOnInit() {
  }

}
