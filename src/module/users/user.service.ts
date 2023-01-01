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
    private _usersRepository: Repository<User>, // private _dataSource: DataSource,
  ) {}

  findAll(): Promise<User[]> {
    return this._usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this._usersRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this._usersRepository.delete(id);
  }

  async addUser(user: UserDto): Promise<UserDto | void> {
    const isUserExist = await this._isUserExist(user);
    if (!isUserExist) return this._usersRepository.save(user);
  }

  private async _isUserExist(user: UserDto): Promise<boolean> {
    const searchUser = await this.getUserByEmail(user.email);
    if (searchUser) return true;
    else return false;
  }

  getUserByEmail(email: string): Promise<User> {
    console.log(email);
    return this._usersRepository.findOneBy({ email });
  }
}
