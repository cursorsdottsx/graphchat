import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class UserBan extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  case!: number;

  @Column()
  @Field(() => String)
  offender!: string;

  @Column()
  @Field(() => String)
  moderator!: string;

  @Column({ type: "text" })
  @Field(() => String)
  reason!: string;

  @Column({ type: "timestamptz" })
  @Field(() => Date, { nullable: true })
  expires?: Date;
}