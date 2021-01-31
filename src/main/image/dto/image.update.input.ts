import { IsString, IsEmail, IsUrl, IsOptional } from 'class-validator';
export class ImageUpdate {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  url?: string;
}
