import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { DataSource } from 'typeorm';
import { UserDto } from 'src/dto/UserDto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private _usersRepository: Repository<User>,
  ) // private _dataSource: DataSource,
  {}

  findAll(): Promise<User[]> {
    return this._usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this._usersRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this._usersRepository.delete(id);
  }

  addUser(user: UserDto): Promise<UserDto> {
    return this._usersRepository.save(user);
  }

  getUserByEmail(email: string): Promise<User> {
    console.log(email);
    return this._usersRepository.findOneBy({ email });
  }
}
