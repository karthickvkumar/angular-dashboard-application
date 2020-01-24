import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import * as Login from "./login.model";

import { DashboardAPIService } from '../dashboard-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  titleMessge: string | number | boolean = 'Message';
  titleColor = 'red';
  imgUrl = 'https://cdn.motor1.com/images/mgl/Bo0Qj/s3/2021-new-lead.jpg';
  showColor = false;

  productNameList: string[] = ['sdasd', 'asd', 'sfdsf'];

  validateEmail: boolean = false;

  studentInfo: any = {
    name: 'Mr.A',
    age: 22
  }


  loginForm: Login.Model.Client = {
    email: '',
    password: ''
  };

  loginFormList: Login.Model.Client[] = [];

  displayTitle() {
    this.titleMessge = "Title Changed!";
    this.imgUrl = "https://media.wired.com/photos/5d09594a62bcb0c9752779d9/master/w_2000,c_limit/Transpo_G70_TA-518126.jpg";
    console.log(this.loginForm)
  }
  ///////////--------------------------//////////
  userName: string = "Mr.A";
  userAge: number = 24;
  userResult: boolean = true;

  scores: number[] = [100, 150];

  names: string[] = ['a', 'b'];

  listOfUser: any[] = [{
    name: "Mr.A",
    age: 24,
    result: true,
    address: {
      area: '',
      state: ''
    }
  },
  {
    name: "Mr.A",
    age: 24,
    result: true,
    address: {
      area: '',
      state: ''
    }
  }]
  color = 'green';
  user: any = {
    name: "Mr.A",
    age: 24,
    result: true,
    address: {
      area: '',
      state: ''
    }
  }

  pass = true;

  employeeLists = [
    {
      "company": "Alfreds Futterkiste",
      "contact": "Maria Anders",
      "conuntry": "Germany"
    },
    {
      "company": "Alfreds Futterkiste",
      "contact": "Maria Anders",
      "conuntry": "Germany"
    },
    {
      "company": "Alfreds Futterkiste",
      "contact": "Maria Anders",
      "conuntry": "Germany"
    },
    {
      "company": "Alfreds Futterkiste",
      "contact": "Maria Anders",
      "conuntry": "Germany"
    }
  ];



  employee: any = {
    name: '',
    des: '',
    loc: ''
  };

  listOfEmployee: any = [];

  //validation: Login.Model.Validation = {
  validation = {
    emailError: false,
    passwordError: false
  }

  employeeList = [];
  //employeeList: Login.Model.Employee[] = [];

  loginInformation: any = {
    status: true,
    userId: "ID1001",
    userName: "Mr.A"
  }

  constructor(private router: Router, private dashboardAPI: DashboardAPIService) { }

  ngOnInit() {
    this.loadEmployeeList();
  }

  handleAddEmployee(event) {
    console.info(event)
  }

  loadEmployeeList() {
    this.employeeList = [{
      name: "Mr.A",
      designation: "Android Developer",
      email: "a@gmail.com"
    },
    {
      name: "Mr.B",
      designation: ".Net Developer",
      email: "b@gmail.com"
    },
    {
      name: "Mr.C",
      designation: "PHP Developer",
      email: "c@gmail.com"
    }];
  }


  handleButtonClick() {
    const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (regx.test(this.loginForm.email) && this.loginForm.password != '') {
      this.validation = {
        emailError: false,
        passwordError: false
      };

      this.router.navigateByUrl('home')
    }
    else {
      this.validation = {
        emailError: true,
        passwordError: true
      };
    }
  }


  validateLogin() {

    const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    this.validateEmail = !regx.test(this.loginForm.email);

    if (this.validateEmail == false) {
      // this.router.navigateByUrl('home');

      this.router.navigate(['home', { user: 'mr.a', age: 22, status: 'single' }])
    }
  }
}
