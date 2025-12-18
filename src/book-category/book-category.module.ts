import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookCategoryService } from './book-category.service';
import { BookCategoryController } from './book-category.controller';
import { BookCategory } from './entities/book-category.entity'; 

@Module({
  imports: [TypeOrmModule.forFeature([BookCategory])],
=======
import { BookCategoryService } from './book-category.service';
import { BookCategoryController } from './book-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookCategory } from './entities/book-category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BookCategory]) // ต้องมีบรรทัดนี้เพื่อให้ Repository ทำงานได้
  ],
>>>>>>> b9c342aad3e496e01fcca38e4e054eb3ea0b947e
  controllers: [BookCategoryController],
  providers: [BookCategoryService],
})
export class BookCategoryModule {}