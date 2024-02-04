import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ApiIntegrationsModule } from './modules/api-integrations/api-integrations.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ManageTweetModule } from './modules/manage-tweet/manage-tweet.module';
import { MailerModule } from './modules/mailer/mailer.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    ApiIntegrationsModule,
    ManageTweetModule,
    MailerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
