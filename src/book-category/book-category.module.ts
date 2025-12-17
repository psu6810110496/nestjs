import { Module } from '@nestjs/common';
import { BookCategoryService } from './book-category.service';
import { BookCategoryController } from './book-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookCategory } from './entities/book-category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BookCategory]) // ต้องมีบรรทัดนี้เพื่อให้ Repository ทำงานได้
  ],
  controllers: [BookCategoryController],
  providers: [BookCategoryService],
})
export class BookCategoryModule {}