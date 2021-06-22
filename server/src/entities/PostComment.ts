import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Post } from "./Post";
import { User } from "./User";

@Entity()
@ObjectType()
export class PostComment extends BaseEntity {
  @PrimaryColumn()
  @Field(() => String)
  id!: string;

  @ManyToOne(() => Post, { cascade: ["update"] })
  @Field(() => Post)
  post!: Post;

  @Column()
  postId!: string;

  @ManyToOne(() => User, { cascade: ["update"] })
  @Field(() => User)
  author!: User;

  @Column()
  authorId!: string;

  @ManyToOne(() => PostComment, { cascade: ["update"] })
  @Field(() => PostComment)
  parent?: PostComment;

  @Column()
  parentId?: string;

  @Column({ type: "text" })
  @Field(() => String)
  content!: string;

  @Column({ type: "int", default: 0 })
  @Field(() => Int)
  likes!: number;
}
