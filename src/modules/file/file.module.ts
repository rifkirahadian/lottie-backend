import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileResolver } from './file.resolver';
import { filesProviders } from './file.provider';

@Module({
  providers: [FileResolver, FileService, ...filesProviders],
})
export class FileModule {}
