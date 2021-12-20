import { Injectable } from '@nestjs/common';
import { PetEntity } from './pet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInputDto } from './dto/create-pet-input.dto';
import { OwnersService } from '../owners/owners.service';
import { Owner } from '../owners/entities/owner.entity';

@Injectable()
export class PetsService {

  constructor(@InjectRepository(PetEntity)
              private petRepository:Repository<PetEntity>,
              private ownersService: OwnersService) {
  }

  async createPet(createPetInput: CreatePetInputDto): Promise<PetEntity> {
    let pet = this.petRepository.create(createPetInput)
    return this.petRepository.save(pet)
  }

  async findAll(): Promise<PetEntity[]>{
    return this.petRepository.find();
  }

  async findOne(id: string): Promise<PetEntity> {
    return this.petRepository.findOneOrFail(id)
  }

  async getOwner(ownerId:string): Promise<Owner> {
    return this.ownersService.findOne(ownerId);
  }

}
