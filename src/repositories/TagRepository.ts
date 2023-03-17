import { dataSource } from '@config/dataSource';
import { Tag } from '@entities/Tag';

export const TagRepository = dataSource.getRepository(Tag);
