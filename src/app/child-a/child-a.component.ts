import { Component, OnInit,OnDestroy,OnChanges,
  AfterContentInit,AfterContentChecked,DoCheck,AfterViewInit,AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.scss']
})
export class ChildAComponent implements OnInit,OnDestroy,OnChanges,
AfterContentInit,AfterContentChecked,DoCheck,AfterViewInit,AfterViewChecked {

//import FormsModule
userInput:any='';

title:string;

message:string;

color:string;

  constructor() {
   }


  sample():string{
    return "Good Evening";
  }

  userClicked(){
    this.message='user has clicked the button';
  }



  ngOnInit(){
    this.title = 'This is a child component';
    this.message='this is a message';
    this.color='green';
    console.log("child ngOnInit invoked");
    setTimeout(()=>{
      this.color='yellow';
    },3000)
    }
  
  
    ngOnChanges(){
      console.log("child ngOnChanges invoked");
    }
  
    ngDoCheck (){
      console.log("child ngDoCheck invoked");
    }
  
    ngAfterContentInit (){
      console.log("child ngAfterContentInit invoked");
    }
  
    ngAfterContentChecked (){
      console.log("child ngAfterContentChecked invoked");
    }
  
    ngAfterViewInit (){
      console.log("child ngAfterViewInit invoked");
    }
  
    ngAfterViewChecked (){
      console.log("child ngAfterViewChecked invoked");
    }
  
    ngOnDestroy(){
      console.log("child ngOnDestroy invoked");
    }


}
