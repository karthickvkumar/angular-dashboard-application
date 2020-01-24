import { Component, OnInit, ViewChild } from '@angular/core';

import { UserInfoComponent } from '../user-info/user-info.component';

import { DashboardAPIService } from '../dashboard-api.service';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	@ViewChild(UserInfoComponent, { static: false }) private userComp: UserInfoComponent;

	selectedUserDetail: any = null;
	userList: any = [
		{
			"id": 100,
			"name": "Mr.A",
			"designation": "UI Developer",
			"location": "Chennai",
			"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
		},
		{
			"id": 101,
			"name": "Mr.B",
			"designation": ".Net Developer",
			"location": "Mysore",
			"description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,."

		},
		{
			"id": 102,
			"name": "Mr.C",
			"designation": "PHP Developer",
			"location": "Banglore",
			"description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."

		},
		{
			"id": 103,
			"name": "Mr.D",
			"designation": "Android Developer",
			"location": "Chennai",
			"description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,."

		},
		{
			"id": 104,
			"name": "Mr.E",
			"designation": "Python Developer",
			"location": "Mumbai",
			"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
		}
	]
	constructor(private dashboardAPI: DashboardAPIService) { }

	ngOnInit() {
		this.onSelect(this.userList[2]);
	}

	onSelect(user) {
		this.selectedUserDetail = user;
	}

	onUpdate() {
		console.log(this.userComp)
		// this.userComp.showEditBtn = false;
		// this.userComp.isEditMode = false;

		const position = this.userList.findIndex(user => user.id === this.userComp.childUser.id);
		this.userList[position] = this.userComp.childUser;
		this.selectedUserDetail = this.userComp.childUser;
	}

	setValue(params) {
		this.dashboardAPI.updateInformation(params);

	}

	onLoadData() {
		this.dashboardAPI.information.subscribe((params: any) => {
			console.info(params)
			this.userList.push({
				'name': params.first_name,
				'designation': params.email,
				'location': params.state,
				'description': ''
			})
		})
	}

	handleChangeInfo(event) {
		console.info(event)
		const position = this.userList.findIndex(user => user.id === event.id);
		console.info(position)
		this.userList[position] = event;
		this.selectedUserDetail = event;
	}

}
