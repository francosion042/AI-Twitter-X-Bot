import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TwitterApiService } from '../api-integrations/twitterApi.service';
import {
  textAndSnippetTopicPrompts,
  textOnlyTopicPrompts,
} from '../../constants/topic-prompts.constant';
import { extractCodeSnippetData, getRandomItem } from '../../commons/utils';
import { OpenAiService } from '../api-integrations/openAi.service';
import { MailerService } from '../mailer/mailer.service';
import { EnvConfigService } from '../envConfig/envConfig.service';
import CodeSnap from 'codesnap';

@Injectable()
export class ManageTweetService {
  private readonly logger = new Logger(ManageTweetService.name);
  constructor(
    private readonly twitterApiService: TwitterApiService,
    private readonly openAiService: OpenAiService,
    private readonly mailerService: MailerService,
    private readonly envConfigService: EnvConfigService,
  ) {}

  @Cron(CronExpression.EVERY_HOUR)
  async createTweet() {
    this.logger.debug('Create Tweet Task Ran .....');

    const topic = getRandomItem(textOnlyTopicPrompts);

    const generatedContent = await this.openAiService.generateResponse(topic);

    console.log(generatedContent.length);
    console.log(generatedContent);

    // Free Twitter users can only post up to 280 character-long tweet
    if (
      !this.envConfigService.getBoolean('USER_ON_TWITTER_PREMIUM') &&
      generatedContent.length > 275
    ) {
      console.log("Content Text Longer Than User's Limit");
      return;
    }

    const tweetResponse = await this.twitterApiService.createTweet({
      text: generatedContent,
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

  @Cron(CronExpression.EVERY_HOUR)
  async createTweetWIthImage() {
    console.log('Create Tweet With Image Task Ran .....');

    const topic = getRandomItem(textAndSnippetTopicPrompts);

    const generatedContent = await this.openAiService.generateResponse(topic);

    console.log(generatedContent);

    const contentText = generatedContent.split('```')[0].trim();
    const snippets = extractCodeSnippetData(generatedContent);

    // Free Twitter users can only post up to 280 character-long tweet
    if (
      !this.envConfigService.getBoolean('USER_ON_TWITTER_PREMIUM') &&
      contentText.length > 275
    ) {
      console.log("Content Text Longer Than User's Limit");
      return;
    }

    if (snippets.length > 0) {
      console.log(snippets);
      // ////////////////////////////////////////////
      const codeSnap = new CodeSnap({
        theme: 'Monokai',
        backgroundColor: 'Cyan',
        numberLines: true,
      });

      await codeSnap.snap(snippets[0]);
      // ////////////////////////////////////////////
      const mediaId =
        await this.twitterApiService.uploadMedia('codeSnapshot.png');

      console.log(mediaId);

      const tweetResponse = await this.twitterApiService.createTweet({
        text: contentText,
        media: { media_ids: [mediaId] },
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
}
