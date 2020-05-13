import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.scss']
})
export class ChildAComponent implements OnInit {

//import FormsModule
userInput:any='';

title:string = 'This is a child component';

message:string='this is a message';

color:string='green';

  constructor() {

    setTimeout(()=>{
      this.color='yellow';
    },3000)

   }

  ngOnInit(): void {
  }


  sample():string{
    return "Good Evening";
  }

  userClicked(){
    this.message='user has clicked the button';
  }



}
