import { BaseModel } from './common';

export class User extends BaseModel {
    name: string;
    username: string;
    password: string;
    email: string;
    mobileNo: string;
    dateOfBirth;
    dateOfJoining;
    role: Role;
    department: Department;
}

export class Role extends BaseModel {
    name: string;
    description: string;
    permissions: Array<Permission>;
}

export class Permission extends BaseModel {
    name: string;
    description: string;
}

export class Credentials {
    username: string;
    password: string;
}

export class Department extends BaseModel {
    name: string;
    description: string;
}

export class Patient extends BaseModel {
    firstName: string;
    middleName: string;
    lastName: string;
    dob;
    age: number;
    emailId: string;
    mobileNo: string;
    assignedDoctor: User;
    receptionist: User;
    department: Department;
}
