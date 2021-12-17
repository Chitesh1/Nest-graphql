import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('pets')
export class PetEntity {

  @Field(type=>Int)
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Field()
  @Column()
  name:string;

  @Field({nullable: true})
  @Column({nullable: true})
  type?:string;

}