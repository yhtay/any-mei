import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  uri: string = 'http://localhost:3000/api/auth';
  constructor(private http: HttpClient) {}

  public test(data: any) {
    return this.http.get(this.uri, data);
  }
}
