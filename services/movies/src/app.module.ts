import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';

@Module({
  imports: [
    ConfigModule,
    MoviesModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: 'mongodb://' +
        config.get('MONGO_INITDB_ROOT_USERNAME') + ':' +
        config.get('MONGO_INITDB_ROOT_PASSWORD') + '@' +
        config.get('MONGO_HOST') + '/' +
        config.get('MONGO_INITDB_DATABASE'),
        useNewUrlParser: true,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
