import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: [ './projects.component.scss' ]
})
export class ProjectsComponent implements OnInit {
	projects$;
	projects: Array<project> = [];
	public displayedColumns = [ 'icons', 'id', 'name', 'teamSize', 'clientName' ];

	constructor(private http: HttpClient) {
		this.projects$ = this.http.get('api/projects');
		this.http.get<any>('api/projects').subscribe((data) => {
			data.forEach((data) => {
				const theProject = new project(data.id, data.name, data.teamSize, data.clientName);
				this.projects.push(theProject);
			});
		});

		// this.projects$ = Observable.of(this.projects);
	}

	addProject(inputText: string) {
		if (inputText !== '') {
			const theProject = new project(5, inputText, 5, 'USA');
			this.projects.push(theProject);
			console.log(this.projects);
		}
	}

	deleteProject(projectId: string) {
		console.log(this.projects);
		console.log('deberia eliminar #' + projectId);
		this.projects = this.projects.filter((theProject) => theProject.id !== projectId);
		console.log(this.projects);
	}

	ngOnInit() {}
}

class project {
	public id;
	public name;
	public teamSize;
	public clientName;

	public constructor(theId: number, theName: string, theTeamSize: number, theClientName: string) {
		this.id = theId;
		this.name = theName;
		this.teamSize = theTeamSize;
		this.clientName = theClientName;
	}
}
