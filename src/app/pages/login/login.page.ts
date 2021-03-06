import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidator } from '../../validators/custom.validator';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login-page',
	templateUrl: './login.page.html',
	providers: [ DataService]
})
export class LoginPage implements OnInit {
	public form: FormGroup;
	public errors: any[] = [];

	constructor(private formBuilder: FormBuilder, private dataService: DataService, private router: Router) {
		this.form = this.formBuilder.group({
			username: [''],
			password: ['', Validators.compose([
				Validators.minLength(3),
				Validators.maxLength(20),
				Validators. required
			])]
		});
	}

	ngOnInit() { }
	
	submit() {
		this.dataService.authenticate(this.form.value).subscribe(
			result => {
				localStorage.setItem('macaw.token', result.token);
				this.router.navigateByUrl('/home');
			},
			error => {
				this.errors = JSON.parse(error._body).errors;
			});
	}
}
