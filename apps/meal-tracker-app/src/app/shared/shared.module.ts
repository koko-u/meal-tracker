import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallXComponent } from './small-x/small-x.component';



@NgModule({
  declarations: [
    SmallXComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SmallXComponent
  ]
})
export class SharedModule { }
