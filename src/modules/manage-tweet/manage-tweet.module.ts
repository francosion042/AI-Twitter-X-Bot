import { Module } from '@nestjs/common';
import { ManageTweetService } from './manage-tweet.service';
import { ManageTweetController } from './manage-tweet.controller';
import { ApiIntegrationsModule } from '../api-integrations/api-integrations.module';

@Module({
  imports: [ApiIntegrationsModule],
  controllers: [ManageTweetController],
  providers: [ManageTweetService],
})
export class ManageTweetModule {}
