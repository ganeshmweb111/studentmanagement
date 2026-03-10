import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/core/services/student.service';
import { Student } from 'src/app/shared/models/student.model';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html'
})
export class EditStudentComponent implements OnInit {

  student: Student = {
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    address: '',
    class: ''
  };

  id!: number;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadStudent();
  }

  loadStudent() {
    this.studentService.getById(this.id).subscribe(res => {
      this.student = res;
    });
  }

  update() {
    this.studentService.update(this.id, this.student)
      .subscribe(() => {
        this.router.navigate(['/students']);
      });
  }
}