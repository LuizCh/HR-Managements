import { ProjectsComponent } from './projects/projects.component';
import { EmployeesComponent } from './employees/employees.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{ path: '', component: HomeComponent },
			{ path: 'employees', component: EmployeesComponent },
			{ path: 'projects', component: ProjectsComponent }
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class ContentRoutingModule {}
