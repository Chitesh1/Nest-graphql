import { Field, InputType, Int } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateOwnerInput {

  @Field()
  name:string;
}
