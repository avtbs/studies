import { DataSource } from 'typeorm';
import { Roles } from 'src/entities/roles';

export const rolesProviders = [
  {
    provide: 'Roles_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Roles),
    inject: ['DATA_SOURCE'],
  },
];