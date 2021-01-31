import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';

@Controller()
export class GeneralController {
  constructor(private config: ConfigService) {}

  @Post('uploadImage')
  @UseInterceptors(FileInterceptor('image'))
  uploadFile(@UploadedFile() file) {
    const hostname = this.config.get('general.hostname');
    return `${hostname}/images/${file.filename}`;
  }

  @Get('images/:image')
  async serveImages(@Param('image') image, @Res() res: Response): Promise<any> {
    try {
      res.sendFile(image, { root: 'images' }, (err: any) => {
        if (err) {
          res.status(HttpStatus.NOT_FOUND).send('Image not found');
        }
      });
    } catch (error) {}
  }
}
