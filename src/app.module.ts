import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { User } from './users/entities/user.entity';

@Module({
  imports: [ConfigModule.forRoot(),
  TypeOrmModule.forFeature([User]), // Aquí deberías tener solo las entidades, no servicios
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    synchronize: true,
  }),
    AuthModule,
    UsersModule],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule { }
