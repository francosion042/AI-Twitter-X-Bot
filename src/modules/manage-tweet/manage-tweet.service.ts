import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TwitterApiService } from '../api-integrations/twitterApi.service';
import topicPrompts from '../../constants/topic-prompts.constant';
import { getRandomItem } from '../../commons/utils';
import { OpenAiService } from '../api-integrations/openAi.service';
import { MailerService } from '../mailer/mailer.service';

@Injectable()
export class ManageTweetService {
  private readonly logger = new Logger(ManageTweetService.name);
  constructor(
    private readonly twitterApiService: TwitterApiService,
    private readonly openAiService: OpenAiService,
    private readonly mailerService: MailerService,
  ) {}

  @Cron(CronExpression.EVERY_2_HOURS)
  async createTweet() {
    this.logger.debug('Create Tweet Task Ran .....');

    const topic = getRandomItem(topicPrompts);

    console.log(topic.topic);

    const tweetContent = await this.openAiService.generateResponse(topic);

    console.log(tweetContent);

    const tweetResponse = await this.twitterApiService.createTweet({
      text: tweetContent,
    });
    console.log(tweetResponse);

    await this.mailerService.sendMail(
      'New Tweet Posted By Your Bot',
      'new-tweet',
      {
        topic: topic.topic,
      },
    );
  }
}
