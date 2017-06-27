import { Entity } from './entity'
import { Segment } from './segment';
import { Contact } from './contact';

export class Customer extends Entity {
	name: string;
	cnpj: string;
	segment: Segment;
	street: string;
	number: string;
	complement: string;
	neighborhood: string;
	city: string;
	state: string;
	zipCode: string;
	contactList: Contact[];
	documentList: Document[];
}