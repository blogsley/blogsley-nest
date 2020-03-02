import * as bcryptjs from 'bcryptjs';
import { Response } from 'express';
import { Args, Resolver, Mutation } from '@nestjs/graphql';
// import { Mutation } from 'type-graphql'
import { JwtService } from '@nestjs/jwt';

import { LoginInput } from './auth.input'
import { ResGql } from '../decorators'

import { User } from "../user/user.entity";

import { Field, ObjectType } from "type-graphql";

@ObjectType()
class LogIn {
  constructor (token: string) {
    this.token = token
  }
  @Field() readonly token: string;
}

@Resolver('auth')
export class AuthResolver {
  constructor(
    private readonly jwt: JwtService,
  ) {}
  
  //@Mutation(() => User)
  @Mutation(() => LogIn)
  async login(
    @Args('data') { username, password }: LoginInput,
  ) {
    /*
    const user = await this.prisma.client.user({ email });
    if (!user) {
      throw Error('Email or password incorrect');
    }

    const valid = await bcryptjs.compare(password, user.password);
    if (!valid) {
      throw Error('Email or password incorrect');
    }
    */
    const user = {
      id: '123'
    }
    const jwt = this.jwt.sign({ id: user.id });

    //return user;
    const result = new LogIn(jwt)
    console.log(result)
    return result
  }

  /*
  @Mutation()
  async signup(
    @Args('signUpInput') signUpInputDto: SignUpInputDto,
    @ResGql() res: Response,
  ) {
    const emailExists = await this.prisma.client.$exists.user({
      email: signUpInputDto.email,
    });
    if (emailExists) {
      throw Error('Email is already in use');
    }
    const password = await bcryptjs.hash(signUpInputDto.password, 10);

    const user = await this.prisma.client.createUser({ ...signUpInputDto, password });

    const jwt = this.jwt.sign({ id: user.id });
    res.cookie('token', jwt, { httpOnly: true });

    return user;
  }
  */
}
