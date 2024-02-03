import { Test, TestingModule } from '@nestjs/testing';
import { ManageTweetService } from './manage-tweet.service';

describe('ManageTweetService', () => {
  let service: ManageTweetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManageTweetService],
    }).compile();

    service = module.get<ManageTweetService>(ManageTweetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
