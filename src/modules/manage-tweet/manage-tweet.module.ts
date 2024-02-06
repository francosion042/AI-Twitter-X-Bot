import { Module } from '@nestjs/common';
import { ManageTweetService } from './manage-tweet.service';
import { ManageTweetController } from './manage-tweet.controller';
import { ApiIntegrationsModule } from '../api-integrations/api-integrations.module';
import { MailerModule } from '../mailer/mailer.module';
import { EnvConfigModule } from '../envConfig/envConfig.module';

@Module({
  imports: [ApiIntegrationsModule, MailerModule, EnvConfigModule],
  controllers: [ManageTweetController],
  providers: [ManageTweetService],
})
export class ManageTweetModule {}
