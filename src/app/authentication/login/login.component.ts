import { AuthenticationService } from './../../authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	constructor(private route: Router, public authenticationService: AuthenticationService) {}

	goToUsers() {
		this.route.navigate([ 'content/home' ]);
		console.log('Vamos a tablas');

		// private authenticationService: AuthenticationService
		// const isloggin = this.authenticationService.isAuthenticated(user,pass);
		// if ( isloggin ) {
		// 	this.route.navigate(['content/home']);
		// }
	}

	sendUsername(username) {
		this.authenticationService.setUsername(username);
	}

	sendPassword(password) {
		this.authenticationService.setPassword(password);
	}

	ngOnInit() {}
}
