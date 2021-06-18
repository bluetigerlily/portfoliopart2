export class AppComponent implements OnInit {
  title = 'springbootfrontend';
  public students: Student[];
  public courses: Course[];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.getCourses();
  }

  public getCourses(): void {
    this.studentService.getStudents().subscribe(
      (response: Student[]) => {
        this.students = response;
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

