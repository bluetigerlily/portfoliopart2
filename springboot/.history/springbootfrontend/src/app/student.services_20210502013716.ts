import { Student } from './employee';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiServerUrl = '';
}

constructor(private http: HttpClient) { }

public getStudent(): Student {}