import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LdHeaderComponent } from './ld-header.component';



@NgModule({
  declarations: [
    LdHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LdHeaderComponent
  ] // exports serve para exportar o componente para outro...
})
export class LdHeaderModule { }
