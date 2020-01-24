import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //get single value
    // let value: string = this.route.snapshot.paramMap.get("user");
    // console.info('Recevied data from Router', value);

    //get entire value
    this.route.paramMap.subscribe((routes: any) => {
      console.log(routes)

    });
  }

  // listUsers(){
  // 	this.dashboardAPI.getUserList().subscribe((response : any) => {
  //       console.info(response);
  //       this.employeeList = response.data;
  //   });
  // }

  // addNewEmployee(){
  //   this.dashboardAPI.createEmployee(this.employeeInformation).subscribe((response : any) => {
  //       console.info(response);
  //   });
  // }

  goBack() {
    this.router.navigateByUrl('/');
  }
}
