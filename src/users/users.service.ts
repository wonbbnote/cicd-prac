import { Injectable } from '@nestjs/common';
import { User } from './users.entities';
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
    private users: User[] = [];

    getAll(): User[] {
        return this.users;
    }

    getOne(id: number): User {
        const user = this.users.find(user => user.id === Number(id));
        return user;
    }

    create(userData: CreateUserDto): void {
        this.users.push({
          id: this.users.length + 1,
          ...userData
        });
    }
    
}
