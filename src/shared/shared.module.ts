import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { GeneralController } from './general.controller';
import { diskStorage } from 'multer';
import { getFileName } from './services/upload.service';

const services = [];

@Module({
  imports: [
    MulterModule.register({
      dest: './images',
      storage: diskStorage({
        destination: './images',
        filename: getFileName,
      }),
    }),
  ],
  providers: [...services],
  controllers: [GeneralController],
  exports: [...services],
})
export class SharedModule {}
