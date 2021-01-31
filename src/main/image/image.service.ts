import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ImageUpdate } from './dto/image.update.input';
import { Image } from './image.model';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private repo: Repository<Image>,
  ) {}

  getAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneOrFail(id);
  }

  addNew(create: Image) {
    return this.repo.save(new Image(create));
  }

  async update(id: number, update: ImageUpdate) {
    const entity = await this.findOne(id);
    return this.repo.save({ ...entity, ...update });
  }

  async delete(id: number) {
    const entity = await this.repo.findOneOrFail(id);
    const res = await this.repo.remove(entity);
    return { ...res, id };
  }
}
