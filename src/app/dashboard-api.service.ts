import { Injectable } from '@angular/core';
//import http client
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DashboardAPIService {

	public sharedData = new BehaviorSubject([]);
	public information = this.sharedData.asObservable();

	constructor(private http: HttpClient) { } //define it in constructor

	updateInformation(message: any) {
		//console.info(this.sharedData.value)
		const currentValue: any = this.sharedData.value;
		const updatedValue = currentValue.concat(message);
		this.sharedData.next(updatedValue)
	}

	getUserList() {
		let apiURL: string = 'https://reqres.in/api/users?page=2';
		return this.http.get(apiURL);
	}

	login(parameter) {
		let apiURL: string = 'https://reqres.in/api/login';
		return this.http.delete(apiURL);
	}
}
