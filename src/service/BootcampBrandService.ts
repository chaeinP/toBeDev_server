import { BootcampBrand } from '@entities/index';
import { provideSingleton } from '@ioc/provideSingletone';
import { CreateBootcampBrandDto } from '@dto/bootcampBrand/CreateBootcampBrandDto';
import { BootcampBrandRepository } from '@repositories/BootcampBrandRepository';
import { EduCompanyRepository } from '@repositories/EduCompanyRepository';
import { ConflictException } from '@common/exceptions/ConflictException';
import { NotFoundException } from '@common/exceptions/NotFoundExeption';

@provideSingleton(BootcampBrandService)
export class BootcampBrandService {
  async getByEduCompanyId(eduCompanyId: number) {
    const eduCompany = await EduCompanyRepository.findOne({
      where: {
        id: eduCompanyId,
      },
    });

    if (!eduCompany) {
      throw new NotFoundException();
    }

    const bootcampBrands = await BootcampBrandRepository.find({
      where: { eduCompany },
    });

    return bootcampBrands;
  }

  async createBootcampBrand({ eduCompanyId, name }: CreateBootcampBrandDto) {
    const eduCompany = await EduCompanyRepository.findOne({
      where: {
        id: eduCompanyId,
      },
    });

    if (!eduCompany) throw new NotFoundException();

    const bootcampBrand = await BootcampBrandRepository.find({
      where: {
        name,
      },
    });

    if (bootcampBrand) throw new ConflictException();

    const newBootcampBrand = new BootcampBrand();
    newBootcampBrand.name = name;
    newBootcampBrand.eduCompany = eduCompany;
    await BootcampBrandRepository.save(newBootcampBrand);
  }
}
