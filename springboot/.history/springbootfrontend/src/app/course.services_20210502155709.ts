import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './course';
import {HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiServerUrl = environment.apiBaseUrl;


constructor(private http: HttpClient) { }

public getCourses(): Observable <Course[]> {
  return this.http.get<Course[]>(`${this.apiServerUrl}/course/all`);
}

public addCourse(course: Course): Observable<Course> {
  return this.http.post<Student>(`${this.apiServerUrl}/course/add`, student);
}

public updateStudent(student: Student): Observable<Student> {
  return this.http.put<Student>(`${this.apiServerUrl}/student/update`, student);
}

public deleteStudent(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiServerUrl}/student/delete/${id}`);
}

}
