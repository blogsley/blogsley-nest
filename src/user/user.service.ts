import { Repository } from "typeorm";

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { User } from "./user.entity";
import { UserInput } from "./user.input";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async createUser(data: UserInput): Promise<User> {
    let user = new User();
    user.username = data.username;
    user.email = data.email;
    user.password = data.password;

    await this.userRepository.save(user);

    return user;
  }

  async getUsers() {
    return await this.userRepository.find();
  }

  async page(offset, limit): Promise<[User[], number]> {
    return this.userRepository.findAndCount({ 
      where: { 
        // any business logic you might have
      },
      skip: offset,
      take: limit
    })
  }
}
