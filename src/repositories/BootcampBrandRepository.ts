import { BootcampBrand } from '@entities/BootcampBrand';
import { dataSource } from '@config/dataSource';

export const BootcampBrandRepository = dataSource.getRepository(BootcampBrand);
