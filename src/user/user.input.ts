import { Field, InputType } from "type-graphql";

@InputType()
export class UserInput {
  @Field() readonly username: string;
  @Field() readonly email: string;
  @Field() readonly password: string;
  @Field() readonly first_name: string;
  @Field() readonly last_name: string;
}
