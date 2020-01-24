import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

	isSelected : any = null;
	userList : any = [
		{
			"name": "Mr.A",
			"designation": "UI Developer",
			"location": "Chennai"
		},
		{
			"name": "Mr.B",
			"designation": ".Net Developer",
			"location": "Mysore"
		},
		{
			"name": "Mr.C",
			"designation": "PHP Developer",
			"location": "Banglore"
		},
		{
			"name": "Mr.D",
			"designation": "Android Developer",
			"location": "Chennai"
		},
		{
			"name": "Mr.E",
			"designation": "Python Developer",
			"location": "Mumbai"
		}
	]
  constructor() { }

  ngOnInit() {
  }

  onSelect(user){
  	 this.isSelected = user;
  }

}
