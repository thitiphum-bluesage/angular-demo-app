import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(`${this.baseURL}/posts`);
  }

  getPostById(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/posts/${id}`);
  }

  getData(): string {
    return 'kuy John';
  }
  getList(): string[] {
    return ['ou', 'john', 'best'];
  }
}
