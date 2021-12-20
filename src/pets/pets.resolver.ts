import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { PetEntity } from './pet.entity';
import { CreatePetInputDto } from './dto/create-pet-input.dto';
import { Owner } from '../owners/entities/owner.entity';

@Resolver(of => PetEntity)
export class PetsResolver {

  constructor(private petService:PetsService) {
  }

  @Query(returns => [PetEntity])
  pets(): Promise<PetEntity[]>{
    return this.petService.findAll()
  }

  @Query(returns => PetEntity)
  pet(@Args('id') id: string): Promise<PetEntity>{
    return this.petService.findOne(id)
  }

  @Mutation(returns => PetEntity)
  createPet(@Args('createPetInput') createPetInputDto: CreatePetInputDto):Promise<PetEntity>{
    return this.petService.createPet(createPetInputDto);
  }

  @ResolveField(returns => Owner)
  owner(@Parent() pet:PetEntity):Promise<Owner>{
    return this.petService.getOwner(pet.ownerId)
  }
}
