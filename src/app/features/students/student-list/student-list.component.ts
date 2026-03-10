import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/core/services/student.service';
import { Student } from 'src/app/shared/models/student.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html'
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getAll().subscribe(res => {
      this.students = res;
    });
  }

  deleteStudent(id: number) {
    if (confirm('Are you sure?')) {
      this.studentService.delete(id).subscribe(() => {
        this.loadStudents();
      });
    }
  }

  editStudent(id: number) {
    this.router.navigate(['/students/edit', id]);
  }
}