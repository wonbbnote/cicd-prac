import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from "./users.service";
import { User } from './users.entities'
import { CreateUserDto } from "./dto/create-user.dto";

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    getAll(): User[] {
    return this.userService.getAll();
    }

    @Get("/:id")
    getOne(@Param("id") userId: number): User {
        return this.userService.getOne(userId);
    }

    @Post()
    create(@Body() userData: CreateUserDto) {
        return this.userService.create(userData);
    }
}
