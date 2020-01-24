import { Component } from '@angular/core';
import { ApiEndpointService } from '../app/api-endpoint.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  message = "This is a sample Dashboard Application";
  colorVariable = 'red';

  userEmailId = '';
  userPassword = '';
  toggleLogin = false;
  listofstudent = ['Mr.Aa', 'Mr.Bb', 'Mr.Cc'];

  constructor(private apiEndPoint: ApiEndpointService) { }

  onSubmit() {
    let response = {
      name: this.userEmailId,
      job: this.userPassword
    }

    this.apiEndPoint.getUserList(response).subscribe((response: any) => {
      console.info(response)
    }, (erorr) => {
      console.info(erorr)
    });
  }

  enableLogin() {
    // this.apiEndPoint.getUser().subscribe((success) => {
    //   //
    // }, (error) => {
    //   //
    // })
    //this.toggleLogin = !this.toggleLogin;
  }

}
