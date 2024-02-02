import { Module } from '@nestjs/common';
import { EnvConfigService } from './envConfig.service';

@Module({
  providers: [EnvConfigService],
  exports: [EnvConfigService],
})
export class EnvConfigModule {}
