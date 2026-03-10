import { Component } from '@angular/core';
import { StudentService } from 'src/app/core/services/student.service';
import { Router } from '@angular/router';
import { Student } from 'src/app/shared/models/student.model';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html'
})
export class AddStudentComponent {

  student: Student = {
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',     // ✅ added
    address: '',     
    class: ''
  };

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {}

  save() {
    this.studentService.add(this.student).subscribe(() => {
      this.router.navigate(['/students']);
    });
  }
}