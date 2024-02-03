import { Module } from '@nestjs/common';
import { OpenAiService } from './openAi.service';
import { HttpModule } from '@nestjs/axios';
import { EnvConfigModule } from '../../envConfig/envConfig.module';
import { TwitterApiService } from './twitterApi.service';

@Module({
  imports: [HttpModule, EnvConfigModule],
  providers: [OpenAiService, TwitterApiService],
  exports: [OpenAiService, TwitterApiService],
})
export class ApiIntegrationsModule {}
