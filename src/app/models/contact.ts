import { Entity } from './entity';
import { Customer } from './customer';

export class Contact extends Entity {
	customer: Customer;
	customerId: string;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	birth?: Date;
	jobRole: string;
	userRole: string;
}