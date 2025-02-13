import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateRecetteDto } from './recettes/dto/createRecettes.dto';
import { RecettesService } from './recettes/recettes.service';
import { Recette } from './recettes/recettes.schema';

@Controller('recettes')
export class RecettesController {
  constructor(private readonly recettesService: RecettesService) {}

  @Get()
  async getAllRecettes(): Promise<Recette[]> {
    return this.recettesService.getRecettes();
  }

  @Post()
  async create(@Body() createRecetteDto: CreateRecetteDto): Promise<Recette> {
    return this.recettesService.create(createRecetteDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRecetteDto: CreateRecetteDto,
  ): Promise<Recette> {
    return this.recettesService.update(id, updateRecetteDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Recette> {
    return this.recettesService.delete(id);
  }
}
