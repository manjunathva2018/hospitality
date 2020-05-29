import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.scss']
})
export class Register1Component implements OnInit {
registerForm:FormGroup;

model:any={
  'firstName':'',
  'lastName':'',
  'mobileNo':'',
  'email':'',
  'password':'',
  'address':{'street':'','city':'','state':'','zip':''}
}


  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm= this.formBuilder.group(
      {'firstName':[''],
    'lastName':[''],
    'mobileNo':['+91'],
    'email':[''],
    'password':[''],
    'address':this.formBuilder.group({
                          'street':[''],
                          'city':[''],
                          'state':[''],
                          'zip':['']
                           })
                          })
  }

  onSubmit(){
    console.log("register 1",this.registerForm.value);
  }

  update(event){
    event.preventDefault();
    this.registerForm.get('firstName').setValue('Hello world!');
  }

}
