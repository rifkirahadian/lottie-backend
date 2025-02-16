import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateFileInput } from './dto/create-file.input';
import { File } from './entities/file.entity';
import { Op } from 'sequelize';

@Injectable()
export class FileService {
  constructor(
    @Inject('FILES_REPOSITORY')
    private filesRepository: typeof File,
  ) {}

  create(createFileInput: CreateFileInput): Promise<File> {
    return this.filesRepository.create({ ...createFileInput });
  }

  findAll(
    search: string | null = null,
    sort: string | null = null,
  ): Promise<File[]> {
    let where = {};
    const order = [];
    if (search) {
      where = {
        name: {
          [Op.like]: `%${search}%`,
        },
      };
    }

    if (sort) {
      const parseSort = sort.split('-');
      if (parseSort.length === 2) {
        order.push([parseSort[0], parseSort[1]]);
      }
    }

    return this.filesRepository.findAll({ where, order });
  }

  async findOne(id: number): Promise<File> {
    const file = await this.filesRepository.findByPk(id);
    if (!file) {
      throw new NotFoundException('File not found');
    }
    return file;
  }
}
