import { Component,OnInit,OnDestroy,OnChanges, AfterContentInit, AfterContentChecked, DoCheck, AfterViewInit, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy,OnChanges,
AfterContentInit,AfterContentChecked,DoCheck,AfterViewInit,AfterViewChecked{

  title = 'hotel-management';

  userData:any=[];

  amenities:any=[];

  amenity:string='';

  age:number;

  ngOnInit(){
  this.userData.push({"name":"rakesh","age":30,"mobileNo":546454767657,"dob":new Date()},
  {"name":"yash","age":20,"mobileNo":5462767657,"dob":"2013/08/23"},{"name":"pallavi","age":20,"mobileNo":54254767657,"dob":new Date('2020/08/20')});
  this.age=20;
  console.log("ngOnInit invoked");
  }


  ngOnChanges(){
    // console.log("ngOnChanges invoked");
  }

  ngDoCheck (){
    // console.log("ngDoCheck invoked");
  }

  ngAfterContentInit (){
    // console.log("ngAfterContentInit invoked");
  }

  ngAfterContentChecked (){
    // console.log("ngAfterContentChecked invoked");
  }

  ngAfterViewInit (){
    // console.log("ngAfterViewInit invoked");
  }

  ngAfterViewChecked (){
    // console.log("ngAfterViewChecked invoked");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy invoked");
  }



  onSave(){
    this.amenities.push(this.amenity);
    console.log(this.amenities);
    this.amenity='';
  }

  deleteElement(index){
      console.log(index);
      this.amenities.splice(index,1);
  }

}
