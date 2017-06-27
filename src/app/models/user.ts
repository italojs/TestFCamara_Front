import { Entity } from './entity';

export class User extends Entity {
	firstName: string;
    lastName: string;
    username: string;
    type: string;
    role: string;
}