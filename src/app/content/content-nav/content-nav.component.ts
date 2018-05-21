import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
	selector: 'content/content-nav',
	templateUrl: './content-nav.component.html',
	styleUrls: [ './content-nav.component.scss' ]
})
export class ContentNavComponent {
	isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
	constructor(private breakpointObserver: BreakpointObserver) {}
}
