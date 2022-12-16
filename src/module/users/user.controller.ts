import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UserDto } from 'src/dto/UserDto';
import { UsersService } from './user.service';
import { User } from './users.entity';

@Controller('user')
export class UsersController {
  constructor(private readonly _userService: UsersService) {}

  @Get()
  getAllUser(): Promise<User[]> {
    return this._userService.findAll();
  }

  @Post('add-user')
  addUser(@Body() user: UserDto) {
    return this._userService.addUser(user);
  }

  @Get('get-user-by-email')
  getUserByEmail(@Query('email') email: string) {
    console.log(email);
    return this._userService.getUserByEmail(email);
  }
}
