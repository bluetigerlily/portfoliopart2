import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course';
import {HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiServerUrl = environment.apiBaseUrl;


constructor(private http: HttpClient) { }

public getCourses(): Observable <Course[]> {
  return this.http.get<Course[]>(`${this.apiServerUrl}/student/course/all`);
}

public addCourse(course: Course): Observable<Course> {
  return this.http.post<Course>(`${this.apiServerUrl}/student/course/add`, course);
}

public updateCourse(course: Course): Observable<Course> {
  return this.http.put<Course>(`${this.apiServerUrl}/student/course/update`, course);
}

public deleteCourse(courseid: number): Observable<void> {
  return this.http.delete<void>(`${this.apiServerUrl}student/course/delete/${courseid}`);
}

}
