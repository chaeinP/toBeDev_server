import { Bootcamp } from '@entities/Bootcamp';
import { dataSource } from '@config/dataSource';

export const BootcampRepository = dataSource.getRepository(Bootcamp);
