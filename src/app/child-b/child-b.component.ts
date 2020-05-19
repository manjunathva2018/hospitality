import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.scss']
})
export class ChildBComponent implements OnInit {
  @Input() displayAminities=[]; 
  @Output() deleteAminity:EventEmitter<number>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(index){
    this.deleteAminity.emit(index);
  }

}
