import { Controller, Post, Body, Get, Patch, Delete, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDTO } from './dto/create-movie.dto';

@Controller('movies')
export class MoviesController {

  constructor(private moviesService: MoviesService) {}

  @Post()
  async create(@Body() data: CreateMovieDTO) {
    return this.moviesService.create(data);
  }

  @Get()
  async find() {
    return this.moviesService.find();
  }

  @Get(':id')
  async findById(@Param('id') id) {
    return this.moviesService.findById(id);
  }
}
