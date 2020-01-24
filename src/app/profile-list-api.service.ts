import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileListApiService {

  constructor(private http: HttpClient) { }

  getUserList() {
    const url: string = "https://reqres.in/api/users?page=2";
    return this.http.get(url);
  }

  createEmployee(data) {
    const url: string = "https://reqres.in/api/users"
    return this.http.post(url, data);
  }

  updateEmployee(data) {
    const url: string = "https://reqres.in/api/users/2"
    return this.http.put(url, data);
  }
  deleteEmployee() {
    const url: string = "https://reqres.in/api/users/2"
    return this.http.delete(url);
  }
}
