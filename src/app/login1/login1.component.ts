import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.scss']
})
export class Login1Component implements OnInit {

regx:string="^[a-zA-Z0-9]$";

loginObj:any={
  email:'',
  password:''
}

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(){
console.log("login1 form",this.loginObj);
  }

}
