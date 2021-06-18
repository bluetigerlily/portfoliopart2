import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'springbootfrontend';
  public students: Student[];

  constructor(private studentService: HttpClient) {}

  public getStudent


}
