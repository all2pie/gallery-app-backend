import { Module } from '@nestjs/common';
import { SharedModule } from '../shared/shared.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageController } from './image/image.controller';
import { Image } from './image/image.model';
import { ImageService } from './image/image.service';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([Image])],
  controllers: [ImageController],
  providers: [ImageService],
  exports: [],
})
export class MainModule {}
