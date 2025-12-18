import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookCategoryDto } from './dto/create-book-category.dto';
import { UpdateBookCategoryDto } from './dto/update-book-category.dto';
import { BookCategory } from './entities/book-category.entity';

@Injectable()
export class BookCategoryService implements OnModuleInit {
  constructor(
    @InjectRepository(BookCategory)
    private repo: Repository<BookCategory>,
  ) {}

<<<<<<< HEAD
=======
  // 1. ส่วน Seeding (สร้างข้อมูลเริ่มต้น)
>>>>>>> b9c342aad3e496e01fcca38e4e054eb3ea0b947e
  async onModuleInit() {
    const count = await this.repo.count();
    if (count === 0) {
      console.log('Seeding Book Categories...');
      await this.repo.save([
        { name: 'Fiction', description: 'Stories and novels' },
        { name: 'Technology', description: 'Computers and engineering' },
        { name: 'History', description: 'Past events' },
      ]);
    }
  }

<<<<<<< HEAD
=======
  // 2. ส่วน CRUD (ที่ Controller ต้องเรียกใช้)
>>>>>>> b9c342aad3e496e01fcca38e4e054eb3ea0b947e
  create(createBookCategoryDto: CreateBookCategoryDto) {
    return this.repo.save(createBookCategoryDto);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOneBy({ id });
  }

  update(id: string, updateBookCategoryDto: UpdateBookCategoryDto) {
    return this.repo.update(id, updateBookCategoryDto);
  }

  remove(id: string) {
    return this.repo.delete(id);
  }
<<<<<<< HEAD
}
=======
  
}
>>>>>>> b9c342aad3e496e01fcca38e4e054eb3ea0b947e
