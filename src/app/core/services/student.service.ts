import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from 'src/app/shared/models/student.model';

@Injectable({ providedIn: 'root' })
export class StudentService {

  private apiUrl = 'https://localhost:7203/api/Student';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Student[]>(this.apiUrl);
  }

  add(student: Student) {
    return this.http.post(this.apiUrl, student);
  }

  update(id: number, student: Student) {
    return this.http.put(`${this.apiUrl}/${id}`, student);
  }
getById(id: number) {
  return this.http.get<Student>(`${this.apiUrl}/${id}`);
}
  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}