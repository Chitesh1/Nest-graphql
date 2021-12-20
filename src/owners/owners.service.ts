import { Injectable } from '@nestjs/common';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OwnersService {

  constructor(@InjectRepository(Owner) private owner:Repository<Owner>) {
  }

  create(createOwnerInput: CreateOwnerInput) {
    let owner = this.owner.create(createOwnerInput);
    return this.owner.save(owner)
  }

  findAll() {
   return this.owner.find();
  }

  findOne(id: string) {
   return this.owner.findOne(id);
  }

  getPet(id:string) {

  }

  update(id: number, updateOwnerInput: UpdateOwnerInput) {
    return `This action updates a #${id} owner`;
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }
}
