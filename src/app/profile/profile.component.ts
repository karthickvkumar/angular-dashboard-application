import { Component, OnInit } from '@angular/core';

import * as Profile from "./profile.model";

import { DashboardAPIService } from '../dashboard-api.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  employeeList: any = [];

  constructor(private dashboardAPI: DashboardAPIService) { }

  ngOnInit() {
    this.loadEmployeeList();
  }

  loadEmployeeList() {
    //setTimeout(() => {
    this.dashboardAPI.getUserList().subscribe((response: any) => {
      console.info(response.data);
      this.employeeList = response.data;
    });
    //}, 5000)

  }

  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

  onLoadData() {
    this.dashboardAPI.information.subscribe(params => {
      console.info(params)
      //if (!this.isEmpty(params)) {
      //this.employeeList.push(params);
      this.employeeList = this.employeeList.concat(params);

      //this.dashboardAPI.updateInformation({});
      //}
    })
  }

}
