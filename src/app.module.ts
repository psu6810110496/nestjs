import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
<<<<<<< HEAD
=======
import { BookCategoryModule } from './book-category/book-category.module';
import { BookModule } from './book/book.module';
>>>>>>> origin/master

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
<<<<<<< HEAD
      port: 5433,
      username: 'admin',
      password: 'password123',
      database: 'bookstore_dev',
      entities: [], // เราจะเพิ่ม Entities ที่นี่ในภายหลัง
      synchronize: true, // สร้าง Table อัตโนมัติ (ใช้สำหรับ Dev เท่านั้น)
    }),
=======
      port: 5432,
      username: 'admin', 
      password: 'password123',
      database: 'bookstore_dev',
      entities: [], 
      autoLoadEntities: true,
      synchronize: true,
    }),
    BookCategoryModule,
    BookModule,
>>>>>>> origin/master
  ],
})
export class AppModule {}