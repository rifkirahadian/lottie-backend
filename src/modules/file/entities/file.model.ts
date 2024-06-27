import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class File {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  file: string;

  @Field()
  size: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
