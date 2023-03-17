import { CreateEduCompanyDto } from '@dto/eduCompany/CreateEduCompanyDto';
import { EduCompany } from '@entities/EduCompany';
import { ConflictException } from '@common/exceptions/ConflictException';
import { EduCompanyRepository } from '@repositories/EduCompanyRepository';
export class EduCompanyService {
  async getEduCompanies() {
    const eduCompanies = await EduCompanyRepository.find();
    return eduCompanies;
  }

  async createEduCompany(data: CreateEduCompanyDto) {
    const { name } = data;

    const eduCompanyRow = await EduCompanyRepository.findOne({
      where: { name },
    });
    if (eduCompanyRow)
      throw new ConflictException('이미 존재하는 eduCompany 입니다.');

    const newEduCompany = new EduCompany();
    newEduCompany.name = name;
    await EduCompanyRepository.save(newEduCompany);
  }
}
