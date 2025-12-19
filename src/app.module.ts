import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Import ConfigService
import { BookCategoryModule } from './book-category/book-category.module';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [

    ConfigModule.forRoot({ 
      isGlobal: true,
      envFilePath: '.env',
    }), 

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],      // บอกว่า Module นี้ต้องใช้ ConfigModule
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'), // ใช้ ConfigService ดึงค่า แทน process.env
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],      // Inject ConfigService เข้ามาใน Factory
    }),
    
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
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
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}