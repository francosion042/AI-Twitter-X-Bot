import { Controller } from '@nestjs/common';
import { ManageTweetService } from './manage-tweet.service';

@Controller('manage-tweet')
export class ManageTweetController {
  constructor(private readonly manageTweetService: ManageTweetService) {}
}
