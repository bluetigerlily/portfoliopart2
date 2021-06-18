import { HttpErrorResponse } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.services';
import { CourseService } from './course.services';
import { Course } from './course';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'springbootfrontend';
  public students: Student[];
  public courses: Course[];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.getCourses();
  }

  public getCourses(): void {
    this.courseService.getCourses().subscribe(
      (response: Course[]) => {
        this.courses = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.getStudents();
  }

  public getStudents(): void {
    this.studentService.getStudents().subscribe(
      (response: Student[]) => {
        this.students = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
