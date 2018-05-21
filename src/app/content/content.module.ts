import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContentRoutingModule } from './content.routing';
import { EmployeesComponent } from './employees/employees.component';
import { ProjectsComponent } from './projects/projects.component';
import { SharedModule } from '../shared/shared.module';
import { ContentNavComponent } from './content-nav/content-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppMocksService } from '../shared/app-mocks.service';

@NgModule({
	imports: [
		CommonModule,
		ContentRoutingModule,
		SharedModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(AppMocksService)
	],
	declarations: [ HomeComponent, EmployeesComponent, ProjectsComponent, ContentNavComponent ]
})
export class ContentModule {}
