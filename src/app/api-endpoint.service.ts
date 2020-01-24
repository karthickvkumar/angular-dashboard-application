import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiEndpointService {

  constructor(private http: HttpClient) { }

  getUser(page) {
    // let api: string = 'https://reqres.in/api/users?page=' + page;
    // return this.http.get(api);
  }

  getUserList(responseData) {
    let api: string = environment.apiServerName + "/api/users";
    let data = {
      "email": responseData.name,
      "pass": responseData.job
    };

    return this.http.post(api, data);
  }
}
