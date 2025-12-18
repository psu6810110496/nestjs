import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
<<<<<<< HEAD
    return this.bookService.findOne(id);
=======
    return this.bookService.findOne(+id);
>>>>>>> b9c342aad3e496e01fcca38e4e054eb3ea0b947e
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
<<<<<<< HEAD
    return this.bookService.update(id, updateBookDto);
=======
    return this.bookService.update(+id, updateBookDto);
>>>>>>> b9c342aad3e496e01fcca38e4e054eb3ea0b947e
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
<<<<<<< HEAD
    return this.bookService.remove(id);
  }
}
=======
    return this.bookService.remove(+id);
  }
}
>>>>>>> b9c342aad3e496e01fcca38e4e054eb3ea0b947e
