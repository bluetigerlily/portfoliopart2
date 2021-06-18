import { Observable } from 'rxjs';
import { Student } from './employee';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiServerUrl = '';


constructor(private http: HttpClient) { }

public getStudents(): Observable <Student[]> {
  return this.http.get<Student[]>(`${this.apiServerUrl}/student/all`);
}

public addStudent(student: Student): Observable<Student> {
  return this.http.post<Student>(`${this.apiServerUrl}/student/add`, student);
}

public updateStudent(student: Student): Observable<Student> {
  return this.http.put<Student>(`${this.apiServerUrl}/student/update`, student);
}

public deleteStudent(id: Student): Observable<Student> {
  return this.http.put<Student>(`${this.apiServerUrl}/student/update`, student);
}

}
