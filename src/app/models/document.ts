import { Entity } from './entity';
import { Customer } from './customer';
import { DocumentType } from './documentType';
import { User } from './user';

export class Document extends Entity {
	customer: Customer;
	documentType: DocumentType;
	expirationDate?: string;
	sender?: User;
	sendDate?: string;
	approver?: User;
	approvalDate?: string;
	file: string;
	status: string;
}