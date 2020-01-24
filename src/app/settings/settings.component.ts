import { Component, OnInit } from '@angular/core';

import { DashboardAPIService } from '../dashboard-api.service';

declare var $: any;

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

	stateList: any = [
		{
			"key": "AN",
			"name": "Andaman and Nicobar Islands"
		},
		{
			"key": "AP",
			"name": "Andhra Pradesh"
		},
		{
			"key": "AR",
			"name": "Arunachal Pradesh"
		},
		{
			"key": "AS",
			"name": "Assam"
		},
		{
			"key": "BR",
			"name": "Bihar"
		},
		{
			"key": "CG",
			"name": "Chandigarh"
		},
		{
			"key": "CH",
			"name": "Chhattisgarh"
		},
		{
			"key": "DH",
			"name": "Dadra and Nagar Haveli"
		},
		{
			"key": "DD",
			"name": "Daman and Diu"
		},
		{
			"key": "DL",
			"name": "Delhi"
		},
		{
			"key": "GA",
			"name": "Goa"
		},
		{
			"key": "GJ",
			"name": "Gujarat"
		},
		{
			"key": "HR",
			"name": "Haryana"
		},
		{
			"key": "HP",
			"name": "Himachal Pradesh"
		},
		{
			"key": "JK",
			"name": "Jammu and Kashmir"
		},
		{
			"key": "JH",
			"name": "Jharkhand"
		},
		{
			"key": "KA",
			"name": "Karnataka"
		},
		{
			"key": "KL",
			"name": "Kerala"
		},
		{
			"key": "LD",
			"name": "Lakshadweep"
		},
		{
			"key": "MP",
			"name": "Madhya Pradesh"
		},
		{
			"key": "MH",
			"name": "Maharashtra"
		},
		{
			"key": "MN",
			"name": "Manipur"
		},
		{
			"key": "ML",
			"name": "Meghalaya"
		},
		{
			"key": "MZ",
			"name": "Mizoram"
		},
		{
			"key": "NL",
			"name": "Nagaland"
		},
		{
			"key": "OR",
			"name": "Odisha"
		},
		{
			"key": "PY",
			"name": "Puducherry"
		},
		{
			"key": "PB",
			"name": "Punjab"
		},
		{
			"key": "RJ",
			"name": "Rajasthan"
		},
		{
			"key": "SK",
			"name": "Sikkim"
		},
		{
			"key": "TN",
			"name": "Tamil Nadu"
		},
		{
			"key": "TS",
			"name": "Telangana"
		},
		{
			"key": "TR",
			"name": "Tripura"
		},
		{
			"key": "UK",
			"name": "Uttar Pradesh"
		},
		{
			"key": "UP",
			"name": "Uttarakhand"
		},
		{
			"key": "WB",
			"name": "West Bengal"
		}
	];

	userList: any = [];
	user: any = {
		first_name: "asasd",
		last_name: "adsa",
		email: "adsa",
		area: "ad",
		city: "asd",
		state: "asd",
		zipCode: "asd"
	};

	editUser: any = {
		first_name: "",
		last_name: "",
		email: "",
		area: "",
		city: "",
		state: "",
		zipCode: ""
	};

	constructor(private dashboardAPI: DashboardAPIService) { }

	ngOnInit() {
	}

	displayUserList() {
		console.info(this.userList)
	}

	onSelectState(event) {
		console.log(event)
		let stateName = event.target.value;
		this.user.state = stateName;
	}

	onSaveChanges() {
		$("#exampleModal").modal('hide');
		this.userList.push(this.editUser)
		this.editUser = {
			first_name: "",
			last_name: "",
			email: "",
			area: "",
			city: "",
			state: "",
			zipCode: ""
		}
	}

	createRecord() {
		this.userList.push(this.user);

		this.dashboardAPI.updateInformation(this.user);

		this.user = {
			first_name: "",
			last_name: "",
			email: "",
			area: "",
			city: "",
			state: "",
			zipCode: ""
		}
	}

}
