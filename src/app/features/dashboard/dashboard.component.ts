import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/core/services/student.service';
import { Student } from 'src/app/shared/models/student.model';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  students: Student[] = [];

  totalStudents = 0;
  class10 = 0;
  class12 = 0;
  otherClass = 0;

  chart: any;   // ✅ Add this line

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {

    this.studentService.getAll().subscribe(res => {

      this.students = res;

      this.totalStudents = res.length;
      this.class10 = res.filter(x => x.class === '10th').length;
      this.class12 = res.filter(x => x.class === '12th').length;
      this.otherClass = this.totalStudents - (this.class10 + this.class12);

      this.createChart();

    });

  }

createChart(){

  this.chart = new Chart("studentChart", {
    type: 'doughnut',
    data: {
      labels: ['10th', '12th', 'Other'],
      datasets: [{
        data: [this.class10, this.class12, this.otherClass],
        backgroundColor: [
          '#198754',
          '#ffc107',
          '#dc3545'
        ]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false   // ⭐ important
    }
  });

}

}