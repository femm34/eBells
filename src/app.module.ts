import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { UsersService } from './users/users.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { RolesModule } from './roles/roles.module';
import { ProductsModule } from './products/products.module';
import { ProductTypesModule } from './product_types/product_types.module';
import { ServicesModule } from './services/services.module';
import { TransactionsModule } from './transactions/transactions.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [ConfigModule.forRoot(),
  TypeOrmModule.forFeature([User]),
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
    UsersModule,
    RolesModule,
    ProductsModule,
    ProductTypesModule,
    ServicesModule,
    TransactionsModule,
    OrdersModule],
  controllers: [AppController],
  providers: [AppService, UsersService, JwtService
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // }
  ],
})
export class AppModule { }
