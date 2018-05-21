import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
	private username = 'Luis';
	private password = '0000';
	usernameInput;
	passwordInput;
	authenticated;

	constructor() {
		this.authenticated = false;
	}

	public setUsername(username) {
		this.usernameInput = username;
	}

	public setPassword(password) {
		this.passwordInput = password;
	}

	public isAuthenticated(): boolean {
		if (this.usernameInput === this.username && this.passwordInput === this.password) {
			this.authenticated = true;
		} else {
			this.authenticated = false;
		}
		return this.authenticated;
	}
}
