import { EduCompany } from '@entities/EduCompany';
import { dataSource } from '@config/dataSource';

export const EduCompanyRepository = dataSource.getRepository(EduCompany);
