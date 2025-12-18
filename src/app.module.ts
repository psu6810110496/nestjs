import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
<<<<<<< HEAD
import { BookCategoryModule } from './book-category/book-category.module';
import { BookModule } from './book/book.module';
=======
<<<<<<< HEAD
=======
import { BookCategoryModule } from './book-category/book-category.module';
import { BookModule } from './book/book.module';
>>>>>>> origin/master
>>>>>>> b9c342aad3e496e01fcca38e4e054eb3ea0b947e

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
<<<<<<< HEAD
      port: 5432,
=======
<<<<<<< HEAD
      port: 5433,
>>>>>>> b9c342aad3e496e01fcca38e4e054eb3ea0b947e
      username: 'admin',
      password: 'password123',
      database: 'bookstore_dev',
      entities: [], 
      autoLoadEntities: true, 
      synchronize: true,
    }),
<<<<<<< HEAD
    BookCategoryModule,
    BookModule,
=======
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
>>>>>>> b9c342aad3e496e01fcca38e4e054eb3ea0b947e
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}