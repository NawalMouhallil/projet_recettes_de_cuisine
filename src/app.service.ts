import { Injectable, Logger } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  private logger = new Logger(AppService.name);

  constructor(private configService: ConfigService) {
    const mongoDbHost = configService.get('MONGO_DB_HOST');
    this.logger.debug(`MongoDB Host: ${mongoDbHost}`);
  }

  getHello(): string {
    // this.configService...
    return 'Hello World!';
  }
}
