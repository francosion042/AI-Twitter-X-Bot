import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { EnvConfigModule } from '../envConfig/envConfig.module';
import { EnvConfigService } from '../envConfig/envConfig.service';

@Module({
  imports: [EnvConfigModule],
  providers: [MailerService, EnvConfigService],
  exports: [MailerService, EnvConfigService],
})
export class MailerModule {}
