import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TwitterApiService } from '../api-integrations/twitterApi.service';

@Injectable()
export class ManageTweetService {
  private readonly logger = new Logger(ManageTweetService.name);
  constructor(private readonly twitterApiService: TwitterApiService) {}

  @Cron(CronExpression.EVERY_30_SECONDS)
  async createTweet() {
    this.logger.debug('Create Tweet Task Ran .....');

    const tweetResponse = await this.twitterApiService.createTweet({
      text: 'Hello World',
    });

    console.log(tweetResponse);
  }
}
