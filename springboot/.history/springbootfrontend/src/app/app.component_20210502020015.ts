import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements{
  title = 'springbootfrontend';
  public students: Student[];

  constructor(private studentService: HttpClient) {}

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
