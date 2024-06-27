import { Inject, Injectable } from '@nestjs/common';
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

  findAll() {
    return `This action returns all file`;
  }

  findOne(id: number) {
    return `This action returns a #${id} file`;
  }
}
