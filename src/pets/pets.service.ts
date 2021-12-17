import { Injectable } from '@nestjs/common';
import { PetEntity } from './pet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class PetsService {

  constructor(@InjectRepository(PetEntity) private petRepository:Repository<PetEntity>) {
  }

  async createPet(createPetInput): Promise<PetEntity>{
    let pet = await this.petRepository.create(createPetInput);
  }

  async findAll(): Promise<PetEntity[]>{
    return await this.petRepository.find();
  }

}
