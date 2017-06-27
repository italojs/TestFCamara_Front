import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CustomValidator } from '../../validators/custom.validator';
import { DataService } from '../../services/data.service';
import { Document } from '../../models/document';
import { DocumentType } from '../../models/documentType';
import { Customer } from '../../models/customer';
import { DocumentGroup } from '../../models/documentGroup';

@Component({
	selector: 'app-document',
	templateUrl: './document.component.html',
	providers: [DataService]
})
export class DocumentComponent implements OnInit {
	form: FormGroup;
	errors: any[] = [];
	action: string;
	alertTitle: string;
	modalTitle: string;

	document: Document;
	documentList: Document[];
	documentTypeList: DocumentType[];
	customerList: Customer[];
	documentGroupList: DocumentGroup[];
	fileName: string = '';

	textFilter: string = '';
	customerFilter: string = '';
	documentGroupFilter: string = '';
	statusFilter: string = '';

	constructor(private formBuilder: FormBuilder, private service: DataService) {
		this.form = formBuilder.group({
			id: '',
			documentTypeId: ['', Validators.required],
			customerId: ['', Validators.required],
			senderId: '',
			approverId: '',
			file: '',
			expirationDate: '',
			isApproved: ''
		});
	}

	ngOnInit() {
		this.getData();
	}

	getData() {
		// this.service.getDocumentList().subscribe(result => this.documentList = result);
		// this.service.getCustomerList().subscribe(result => this.customerList = result);
		// this.service.getDocumentGroupList().subscribe(result => this.documentGroupList = result);
	}
	
}
