import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateFileInput } from './dto/create-file.input';
import { File } from './entities/file.entity';

@Injectable()
export class FileService {
  constructor(
    @Inject('FILES_REPOSITORY')
    private filesRepository: typeof File,
  ) {}

  create(createFileInput: CreateFileInput): Promise<File> {
    return this.filesRepository.create({ ...createFileInput });
  }

  findAll(): Promise<File[]> {
    return this.filesRepository.findAll();
  }

  async findOne(id: number): Promise<File> {
    const file = await this.filesRepository.findByPk(id);
    if (!file) {
      throw new NotFoundException('File not found');
    }
    return file;
  }
}
