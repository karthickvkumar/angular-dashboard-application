import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
//IMPORT SERVICE
import { DashboardAPIService } from './dashboard-api.service';

import { HttpClientModule } from "@angular/common/http";
import { DashboardDirective } from './dashboard.directive';
import { UserListComponent } from './user-list/user-list.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { InfoComponent } from './info/info.component';
import { InfoChildComponent } from './info-child/info-child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { NgxRendererModule } from 'ngx-renderer-v2';

import { ApiEndpointService } from './api-endpoint.service';

import { EndpointService } from './endpoint.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfileListComponent } from './profile-list/profile-list.component';

import { ProfileListApiService } from './profile-list-api.service';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { TableEditDirective } from './table-edit.directive';
import { CustomEmployeeDirective } from './custom-employee.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent,
    ProfileComponent,
    SettingsComponent,
    DashboardDirective,
    UserListComponent,
    UserInfoComponent,
    InfoComponent,
    InfoChildComponent,
    EmployeeListComponent,
    LoginPageComponent,
    ProfileListComponent,
    EmployeeInfoComponent,
    TableEditDirective,
    CustomEmployeeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxRendererModule
  ],
  providers: [DashboardAPIService, ApiEndpointService, EndpointService, ProfileListApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
