import { File } from './entities/file.entity';

export const filesProviders = [
  {
    provide: 'FILES_REPOSITORY',
    useValue: File,
  },
];
