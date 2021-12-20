import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PetEntity } from '../../pets/pet.entity';

@ObjectType()
@Entity('owners')
export class Owner {

  @Field(type=>String)
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Field()
  @Column()
  name:string;

  @OneToMany(()=>PetEntity,(petEntity)=>petEntity.owner)
  @Field(type => [PetEntity],{nullable: true})
  pets?:PetEntity[]
}
