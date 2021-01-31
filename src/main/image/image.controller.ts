import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ImageService } from './image.service';
import { Image } from './image.model';
import { ImageUpdate } from './dto/image.update.input';

@Controller('image')
export class ImageController {
  constructor(private readonly service: ImageService) {}

  @Get()
  images() {
    return this.service.getAll();
  }

  @Get(':id')
  image(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Post()
  addImage(@Body() create: Image) {
    return this.service.addNew(create);
  }

  @Patch(':id')
  updateImage(@Param('id') id: number, @Body() update: ImageUpdate) {
    return this.service.update(id, update);
  }

  @Delete(':id')
  removeImage(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
