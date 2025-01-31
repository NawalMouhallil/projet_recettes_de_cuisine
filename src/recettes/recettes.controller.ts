import { Controller } from '@nestjs/common';
import { RecettesService } from './recettes.service';

@Controller('recettes')
export class RecettesController {
  constructor(private recettesService: RecettesService) {}
}
