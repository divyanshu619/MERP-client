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
