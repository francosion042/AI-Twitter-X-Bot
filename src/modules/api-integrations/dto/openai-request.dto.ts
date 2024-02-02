import { IsString, IsNotEmpty } from 'class-validator';

export class OpenAiRequestDto {
  @IsString()
  @IsNotEmpty()
  prompt: string;
}