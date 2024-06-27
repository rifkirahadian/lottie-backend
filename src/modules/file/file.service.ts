import { Injectable } from '@nestjs/common';
import { CreateFileInput } from './dto/create-file.input';

@Injectable()
export class FileService {
  create(createFileInput: CreateFileInput) {
    return 'This action adds a new file';
  }

  findAll() {
    return `This action returns all file`;
  }

  findOne(id: number) {
    return `This action returns a #${id} file`;
  }
}
