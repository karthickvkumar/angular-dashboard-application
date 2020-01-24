import { Component, OnInit } from '@angular/core';
import { ProfileListApiService } from '../profile-list-api.service'

interface companyInfoModel {
  companyName: string;
  contact: string;
  country: string;
}

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  profileList: any = [];
  employee: any = {
    name: '',
    job: ''
  }
  companyInfo: companyInfoModel[] = [
    {
      companyName: 'Apple',
      contact: 'sales@apple.com',
      country: 'USA'
    },
    {
      companyName: 'Microsodt',
      contact: 'sales@microsoft.com',
      country: 'USA'
    },
    {
      companyName: 'Nokia',
      contact: 'sales@nokia.com',
      country: 'Norway'
    },
    {
      companyName: 'Google',
      contact: 'sales@google.com',
      country: 'USA'
    },
    {
      companyName: 'HCL',
      contact: 'sales@hcl.com',
      country: 'India'
    }
  ]
  constructor(private ProfileListApi: ProfileListApiService) { }

  ngOnInit() {
    this.ProfileListApi.getUserList().subscribe((response: any) => {
      //success
      console.info(response.data)
      this.profileList = response.data;
    }, (error) => {
      //error
      console.warn(error)
    });
  }


  onLoadAPI() {
    // this.ProfileListApi.createEmployee(this.employee).subscribe((response: any) => {
    //   console.info(response)
    // }, (error) => {

    // });
    // this.ProfileListApi.updateEmployee(this.employee).subscribe((response: any) => {
    //   console.info(response)
    // }, (error) => {

    // });
    this.ProfileListApi.deleteEmployee().subscribe((response: any) => {
      console.info(response)
    }, (error) => {

    });
  }

  onEdit(index, value) {
    console.log(index, value)
  }

  onDelete(index, value) {
    console.log(index, value)
    this.companyInfo.splice(index, 1)
  }

  getColor(country) {
    switch (country) {
      case 'Norway':
        return 'green';
      case 'USA':
        return 'blue';
      case 'India':
        return 'red';
    }
  }

}
