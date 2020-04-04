import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { User } from "./user.entity";
import { UserService } from "./user.service";
import { UserInput } from "./user.input";

import { RelayedQuery, RelayLimitOffset, RelayLimitOffsetArgs } from 'auto-relay';

@Resolver(of => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  /*
  @Query(() => [User])
  async users() {
    return this.userService.getUsers();
  } */

  @RelayedQuery(() => User)
  async allUsers(
    @RelayLimitOffset() {limit, offset}: RelayLimitOffsetArgs
  ): Promise<[User[], number]> {
    return this.userService.page(offset, limit)
  }

  @Mutation(() => User)
  async createUser(@Args("data") data: UserInput) {
    return this.userService.createUser(data);
  }
}
