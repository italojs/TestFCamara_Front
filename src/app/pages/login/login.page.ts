import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidator } from '../../validators/custom.validator';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login-page',
	templateUrl: './login.page.html',
	providers: [DataService]
})
export class LoginPage implements OnInit {
	public form: FormGroup;
	public errors: any[] = [];

	constructor(private formBuilder: FormBuilder, private dataService: DataService, private router: Router) {
		this.form = this.formBuilder.group({
			username: ['', Validators.compose([
				Validators.minLength(6),
				Validators.maxLength(150),
				Validators.required,
				Validators.email
			])],
			password: ['', Validators.compose([
				Validators.minLength(3),
				Validators.maxLength(20),
				Validators. required
			])]
		});

		var token = localStorage.getItem('macaw.token');
		if (token)
			this.router.navigateByUrl('/document');
	}

	ngOnInit() { }
	
	submit() {
		// this.dataService.authenticate(this.form.value).subscribe(
		// 	result => {
		// 		localStorage.setItem('macaw.token', result.token);
		// 		localStorage.setItem('macaw.user', JSON.stringify(result.user));
		// 		this.router.navigateByUrl('/document');
		// 	},
		// 	error => {
		// 		this.errors = JSON.parse(error._body).errors;
		// 	});

		console.log("passou aqui");
		this.router.navigateByUrl('/document');
	}
	isValid(controlName: string): boolean {
		if (!this.form.controls[controlName].valid && !this.form.controls[controlName].pristine)
			return false;
		else
			return true;
	}

}
