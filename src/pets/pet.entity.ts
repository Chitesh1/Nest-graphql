import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Owner } from '../owners/entities/owner.entity';

@ObjectType()
@Entity('pets')
export class PetEntity {

  @Field(type=>String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name:string;

  @Field({nullable: true})
  @Column({nullable: true})
  type?:string;

  @Column({nullable: true})
  @Field(type => String)
  ownerId:string

  @ManyToOne(()=>Owner,(owner)=>owner.pets)
  @Field(type => Owner)
  owner: Owner

}