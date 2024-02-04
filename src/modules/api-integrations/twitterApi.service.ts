import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import {
  SendTweetV2Params,
  TweetV2PostTweetResult,
  TwitterApi,
  TwitterApiReadWrite,
} from 'twitter-api-v2';
import { EnvConfigService } from '../envConfig/envConfig.service';

@Injectable()
export class TwitterApiService {
  private readonly baseUrl: string;
  private readonly authCredentials: string;
  private twitterClient: TwitterApiReadWrite;
  constructor(private readonly envConfigService: EnvConfigService) {
    this.baseUrl = envConfigService.getString('TWITTER_API_BASE_URL');

    this.authCredentials = Buffer.from(
      `${envConfigService.getString('TWITTER_API_KEY')}:${envConfigService.getString('TWITTER_API_SECRET')}`,
    ).toString('base64');

    this.twitterClient = new TwitterApi({
      appKey: envConfigService.getString('TWITTER_API_KEY'),
      appSecret: envConfigService.getString('TWITTER_API_SECRET'),
      accessToken: envConfigService.getString('TWITTER_ACCESS_TOKEN'),
      accessSecret: envConfigService.getString('TWITTER_ACCESS_SECRET'),
    }).readWrite;
  }

  async getBearerToken(): Promise<string> {
    // Prepare the request body
    const requestBody = 'grant_type=client_credentials';

    // Prepare the request config
    const requestOptions = {
      headers: {
        Authorization: `Basic ${this.authCredentials}`,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    };
    try {
      // Send the request to obtain the bearer token
      const response: AxiosResponse = await axios.post(
        `${this.baseUrl}/oauth2/token`,
        requestBody,
        requestOptions,
      );
      const bearerToken: string = response.data.access_token;
      console.log('Bearer Token:', bearerToken);
      return bearerToken;
    } catch (error) {
      console.error(
        'Error obtaining bearer token:',
        error.response ? error.response.data : error.message,
      );
      throw error;
    }
  }

  async createTweet(
    content: SendTweetV2Params,
  ): Promise<TweetV2PostTweetResult> {
    try {
      return await this.twitterClient.v2.tweet(content);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteTweet() {}
}
