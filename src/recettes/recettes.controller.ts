import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateRecetteDto } from './dto/createRecettes.dto';
import { RecettesService } from './recettes.service';
import { Recette } from './recettes.schema';

@Controller('recettes')
export class RecettesController {
  constructor(private readonly recettesService: RecettesService) {}

  @Get()
  async getAllRecettes(): Promise<Recette[]> {
    return this.recettesService.getRecettes();
  }

  @Get(':id')
  async getRecette(@Param('id') id: string) {
    return await this.recettesService.getRecetteById(id);
  }

  @Post()
  async createRecette(@Body() createRecetteDto: CreateRecetteDto) {
    console.log(createRecetteDto); // Vérifie que les données reçues sont correctes
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
  async delete(@Param('id') id: string) {
    return this.recettesService.delete(id);
  }
}
