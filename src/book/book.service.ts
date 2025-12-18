import { Injectable } from '@nestjs/common';
<<<<<<< HEAD
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private repo: Repository<Book>,
  ) {}

  async incrementLikes(id: string) {
    const book = await this.repo.findOneBy({ id });
    if (book) {
      book.likeCount += 1;
      return this.repo.save(book);
    }
  }

  create(createBookDto: CreateBookDto) {
    return this.repo.save(createBookDto);
  }

  findAll() {
    return this.repo.find({ relations: ['category'] });
  }

  findOne(id: string) {
    return this.repo.findOne({
      where: { id },
      relations: ['category'],
    });
  }

  update(id: string, updateBookDto: UpdateBookDto) {
    return this.repo.update(id, updateBookDto);
  }

  remove(id: string) {
    return this.repo.delete(id);
  }
}
=======
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
  create(createBookDto: CreateBookDto) {
    return 'This action adds a new book';
  }

  findAll() {
    return `This action returns all book`;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
>>>>>>> b9c342aad3e496e01fcca38e4e054eb3ea0b947e
