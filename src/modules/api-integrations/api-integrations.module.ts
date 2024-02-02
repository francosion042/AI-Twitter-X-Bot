import { Module } from '@nestjs/common';
import { OpenAiService } from './openAi.service';
import { HttpModule } from '@nestjs/axios';
import { EnvConfigModule } from '../../envConfig/envConfig.module';

@Module({
  imports: [HttpModule, EnvConfigModule],
  providers: [OpenAiService],
  exports: [OpenAiService],
})
export class ApiIntegrationsModule {}
