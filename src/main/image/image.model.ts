import { IsString, IsEmail, IsUrl } from 'class-validator';
import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../shared/base/base.entity';

@Entity()
export class Image extends BaseEntity<Image> {
  @IsString()
  @Column()
  title: string;

  @IsEmail()
  @Column()
  email: string;

  @IsString()
  @Column()
  description: string;

  @IsString()
  @Column()
  url: string;
}
