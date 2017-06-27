import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-headbar',
	templateUrl: './headbar.component.html'
})
export class HeadbarComponent implements OnInit {
	public user: string = '';

	constructor(private router: Router) {
		var userData = JSON.parse(localStorage.getItem('macaw.user'))
		if (userData)
			this.user = userData.name;
	}

	ngOnInit() { }

	logout() {
		localStorage.removeItem('macaw.token');
		localStorage.removeItem('macaw.user');
		localStorage.clear();
		this.router.navigateByUrl('/');
	}
}
