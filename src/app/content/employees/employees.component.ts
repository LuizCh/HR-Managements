import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

@Component({
	selector: 'app-employees',
	templateUrl: './employees.component.html',
	styleUrls: [ './employees.component.scss' ]
})
export class EmployeesComponent implements OnInit {
	employees$;
	public displayedColumns = [
		'id',
		'name',
		'company',
		'age',
		'birthday',
		'favoriteColor',
		'project'
	];
	constructor(private http: HttpClient) {
		this.employees$ = this.http.get('api/employees');
	}
	ngOnInit() {}
}
