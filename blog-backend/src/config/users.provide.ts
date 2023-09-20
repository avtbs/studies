import { DataSource } from 'typeorm';
import { Users } from 'src/entities/users';

export const usersProviders = [
  {
    provide: 'Users_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Users),
    inject: ['DATA_SOURCE'],
  },
];