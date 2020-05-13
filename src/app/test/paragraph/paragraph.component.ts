import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit {

public dateTimeNow:Date=new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
