import { Query, Resolver } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { PetEntity } from './pet.entity';

@Resolver(of => PetEntity)
export class PetsResolver {

  constructor(private petService:PetsService) {
  }

  @Query(returns => [PetEntity])
  pets(): Promise<PetEntity[]>{
    return this.petService.findAll()
  }

}
