import { CreateBootcampDto } from '@dto/bootcamp/CreateBootcampDto';
import { Bootcamp } from '@entities/Bootcamp';
import { ConflictException } from '../common/exceptions/ConflictException';
import { NotFoundException } from '../common/exceptions/NotFoundExeption';
import { provideSingleton } from '@ioc/provideSingletone';
import { BootcampBrandRepository } from '@repositories/BootcampBrandRepository';
import { BootcampRepository } from '@repositories/BootcampRepository';

@provideSingleton(BootcampService)
export class BootcampService {
  async getByBootcampBrandId(bootcampBrandId: number) {
    const bootcampBrand = await BootcampBrandRepository.findOne({
      where: {
        id: bootcampBrandId,
      },
    });

    if (!bootcampBrand) {
      throw new NotFoundException();
    }

    const bootcamps = await BootcampRepository.find({
      where: { bootcampBrand },
    });

    return bootcamps;
  }

  async createBootcamp({ name, bootcampBrandId }: CreateBootcampDto) {
    const bootcampBrand = await BootcampBrandRepository.findOne({
      where: { id: bootcampBrandId },
    });

    if (!bootcampBrand) throw new NotFoundException();

    const bootcamp = await BootcampRepository.findOne({
      where: { name },
    });

    if (bootcamp) throw new ConflictException();

    const newBootcamp = new Bootcamp();
    newBootcamp.name = name;
    newBootcamp.bootcampBrand = bootcampBrand;
    await BootcampRepository.save(newBootcamp);
  }
}
