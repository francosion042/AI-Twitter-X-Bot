import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ApiIntegrationsModule } from './modules/api-integrations/api-integrations.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ApiIntegrationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
