import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

@NgModule({
  declarations: [  
    StudentListComponent,
    AddStudentComponent,
    EditStudentComponent],
  imports: [
    CommonModule,
    FormsModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
