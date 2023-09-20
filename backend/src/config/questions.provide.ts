import { DataSource } from 'typeorm';
import { Questions } from 'src/entities/questions';

export const questionsProviders = [
  {
    provide: 'Questions_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Questions),
    inject: ['DATA_SOURCE'],
  },
];