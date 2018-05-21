import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { AuthenticationGuard } from './authentication-guard.service';
import { AuthenticationService } from './authentication.service';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CoreModule,
		RouterModule.forRoot([
			{
				path: '',
				loadChildren: './authentication/authentication.module#AuthenticationModule'
			},
			{
				path: 'home',
				loadChildren: './content/content.module#ContentModule',
				canLoad: [ AuthenticationGuard ]
			}
			// {
			// 	path: 'login',
			// 	pathMatch: 'full',
			// 	redirectTo: ''
			// }
		])
	],
	providers: [ AuthenticationGuard, AuthenticationService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
