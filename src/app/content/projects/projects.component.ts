import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: [ './projects.component.scss' ]
})
export class ProjectsComponent implements OnInit {
	projects$;
	public displayedColumns = [ 'id', 'name', 'teamSize', 'clientName' ];

	constructor(private http: HttpClient) {
		this.projects$ = this.http.get('api/projects');
	}

	ngOnInit() {}
}
