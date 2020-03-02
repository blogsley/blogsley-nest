import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Field, ObjectType, Int } from "type-graphql";

@ObjectType()
@Entity("user")
export class User {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column("varchar", { length: 256, unique: true })
  username: string;

  @Field()
  @Column("varchar", { length: 256, unique: true })
  password: string;

  @Field()
  @Column("varchar", { length: 256 })
  email: string;

  @Field()
  @Column("varchar", { length: 256 })
  first_name: string;

  @Field()
  @Column("varchar", { length: 256 })
  last_name: string;
}
