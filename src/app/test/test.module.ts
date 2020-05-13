import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphComponent } from './paragraph/paragraph.component';

@NgModule({
  declarations: [ParagraphComponent],
  imports: [
    CommonModule
  ],
  exports:[ParagraphComponent]
})
export class TestModule { }
