import { Body, Controller, Post } from '@nestjs/common';

import { CreateRecetteDto } from './recettes/dto/createRecettes.dto';
import { RecettesService } from './recettes/recettes.service';

@Controller('recettes')
export class RecettesController {
  constructor(private readonly recettesService: RecettesService) {}

  @Post()
  async create(@Body() createRecetteDto: CreateRecetteDto) {
    return this.recettesService.create(createRecetteDto);
  }
}
