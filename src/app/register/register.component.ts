import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
registerForm:FormGroup;

model:any={
  'firstName':'',
  'lastName':'',
  'mobileNo':'',
  'email':'',
  'password':'',
  'address':{'street':'','city':'','state':'','zip':''}
}


  constructor() { }

  ngOnInit(): void {
    this.registerForm=new FormGroup({
      'firstName':new FormControl(''),
      'lastName':new FormControl(''),
      'mobileNo':new FormControl('+91'),
      'email':new FormControl(''),
      'password':new FormControl(''),
      'address':new FormGroup({
                            'street':new FormControl(''),
                            'city':new FormControl(''),
                            'state':new FormControl(''),
                            'zip':new FormControl('')
                             })
    })
  }

  onSubmit(){
    console.log("register",this.registerForm.value);
  }

  update(event){
    event.preventDefault();
    this.registerForm.get('firstName').setValue('Hello world!');
  }

}
