import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FileService } from './file.service';
import { CreateFileInput } from './dto/create-file.input';
import { File } from './entities/file.model';

@Resolver(() => File)
export class FileResolver {
  constructor(private readonly fileService: FileService) {}

  @Mutation(() => File)
  createFile(@Args('createFileInput') createFileInput: CreateFileInput) {
    return this.fileService.create(createFileInput);
  }

  @Query(() => [File])
  findAll(@Args('search', { nullable: true }) search: string) {
    return this.fileService.findAll(search);
  }

  @Query(() => File)
  findOne(@Args('id') id: number) {
    return this.fileService.findOne(id);
  }
}
