import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationGuard implements CanLoad {
	constructor(public authenticationService: AuthenticationService, public router: Router) {}

	canLoad(): boolean {
		if (!this.authenticationService.isAuthenticated()) {
			// this.router.navigate([ 'login' ]);
			return false;
		}
		return true;
	}
}
