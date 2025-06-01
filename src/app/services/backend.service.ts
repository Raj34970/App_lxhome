import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private apiUrl = 'http://localhost:3000'; // Backend URL

  constructor(private http: HttpClient) { }

  // Call the backend to get data
  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/data`);
  }
}
