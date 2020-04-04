import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Field, ObjectType, Int } from "type-graphql";

/*
    id = PrimaryKey(int, auto=True)
    status = Required(str, 16, default='draft')
    title = Required(str, 256)
    slug = Optional(str, 256)
    model = Required(str)
    cover = Optional(str, 256)
    body = Required(str)
    timestamp = Required(datetime, index=True, default=datetime.utcnow())
    author = Set('User', lazy=True)

*/

@ObjectType()
@Entity()
export class Post {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column("varchar", { length: 16, default: 'draft' })
  status: string;

  @Field()
  @Column("varchar", { length: 256, unique: true })
  title: string;

  @Field()
  @Column("varchar", { length: 256 })
  slug: string;

  @Field()
  @Column("varchar", { length: 256 })
  model: string;

  @Field()
  @Column("varchar", { length: 256 })
  cover: string;

  @Field()
  @Column("text")
  body: string;

  @Field()
  @Column("varchar", { length: 256 })
  timestamp: Date;

  @Field()
  @Column("varchar", { length: 256 })
  author: string;

}
