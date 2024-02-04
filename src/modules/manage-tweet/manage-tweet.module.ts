import { Module } from '@nestjs/common';
import { ManageTweetService } from './manage-tweet.service';
import { ManageTweetController } from './manage-tweet.controller';
import { ApiIntegrationsModule } from '../api-integrations/api-integrations.module';
import { MailerModule } from '../mailer/mailer.module';

@Module({
  imports: [ApiIntegrationsModule, MailerModule],
  controllers: [ManageTweetController],
  providers: [ManageTweetService],
})
export class ManageTweetModule {}
