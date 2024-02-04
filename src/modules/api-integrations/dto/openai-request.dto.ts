import { IsString, IsNotEmpty } from 'class-validator';

export class OpenAiRequestDto {
  @IsString()
  @IsNotEmpty()
  userProfession: string;

  @IsString()
  @IsNotEmpty()
  prompt: string;
}
