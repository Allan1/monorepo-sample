import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Movie } from './interfaces/movie.interface';
import { CreateMovieDTO } from './dto/create-movie.dto';

@Injectable()
export class MoviesService {
  constructor(@InjectModel('Movie') private readonly model: Model<Movie>) {}

  async create(createMovieDTO: CreateMovieDTO): Promise<Movie> {
    const newMovie = await this.model(createMovieDTO);
    return newMovie.save();
  }

  async find(): Promise<Movie[]> {
    return await this.model.find().exec();
  }

  async findById(id): Promise<Movie> {
    return await this.model
      .findById(id)
      .exec();
  }
}
