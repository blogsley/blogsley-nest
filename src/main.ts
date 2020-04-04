import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { TypeOrmConnection } from '@auto-relay/typeorm'
import { AutoRelayConfig } from 'auto-relay'

new AutoRelayConfig({ orm: () => TypeOrmConnection })

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5000);
}
bootstrap();
