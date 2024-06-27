import { Sequelize } from 'sequelize-typescript';
import { File } from 'src/modules/file/entities/file.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: '.db/data.sqlite3',
      });
      sequelize.addModels([File]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
