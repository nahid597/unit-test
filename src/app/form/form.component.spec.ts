import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { FormBuilder } from '@angular/forms';

describe('FormComponent', () => {

 let component: FormComponent;

  beforeEach(() => {
    component = new FormComponent(new FormBuilder);
  });

  it('form contain 2 contents', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();

  });

  it('form contain name required', () => {

   let control =  component.form.get('name');
    control.setValue('');
    expect(control.valid).toBeFalsy();

  });


})
