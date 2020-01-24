import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import Component
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';
import { InfoComponent } from './info/info.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{
		path: '',
		component: LoginComponent
	},
	{
		path: 'home',
		component: HomeComponent,
		children: [
			{
				path: '',
				component: ProfileComponent
			},
			{
				path: 'about',
				component: AboutComponent
			},
			{
				path: 'settings',
				component: SettingsComponent
			},
			{
				path: 'info',
				component: InfoComponent
			},
			{
				path: 'demo',
				component: EmployeeInfoComponent
			}
		]
	},
	{
		path: '**',
		component: PageNotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
