import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeInfo = {
    name: '',
    dob: '',
    designation: '',
    location: ''
  };

  validate = {
    name: false,
    dob: false,
    designation: false,
    location: false
  }

  employeeList = [];
  onSelectRow: any;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

    this.validate.name = (this.employeeInfo.name == '') ? true : false;
    this.validate.dob = (this.employeeInfo.dob == '') ? true : false;
    this.validate.designation = (this.employeeInfo.designation == '') ? true : false;
    this.validate.location = (this.employeeInfo.location == '') ? true : false;

    if (!this.validate.name && !this.validate.dob && !this.validate.designation && !this.validate.location) {
      this.employeeList.push(this.employeeInfo);
      this.employeeInfo = {
        name: '',
        dob: '',
        designation: '',
        location: ''
      }
    }
  }

  onClickRow(row) {
    this.onSelectRow = row;
  }

  onEdit() {

  }

  onDelete(index) {
    this.employeeList.splice(index, 1);
  }

}
