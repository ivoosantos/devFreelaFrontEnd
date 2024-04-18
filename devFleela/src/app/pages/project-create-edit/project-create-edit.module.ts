import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCreateEditComponent } from './project-create-edit.component';
import { ProjectRountingModule } from './project-create-edit-rounting.module';
import { LdWrapperModule } from 'src/app/features/ld-wrapper/ld-wrapper.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LdButtonModule } from 'src/app/shared/components/ld-button/ld-button.module';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProjectCreateEditComponent
  ],
  imports: [
    CommonModule,
    ProjectRountingModule,
    LdWrapperModule,
    LdButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ProjectCreateEditModule { }
