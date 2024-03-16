import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CardsModule } from './cards/cards.module';
import { MaterialsModule } from './materials/materials.module';
import { OrdersModule } from './orders/orders.module';
import { ProductTypesModule } from './product_types/product_types.module';
import { Product } from './products/entities/product.entity';
import { ProductsModule } from './products/products.module';
import { ProductsService } from './products/products.service';
import { Role } from './roles/entities/role.entity';
import { RolesModule } from './roles/roles.module';
import { ServicesModule } from './services/services.module';
import { TransactionsModule } from './transactions/transactions.module';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { AddressesModule } from './addresses/addresses.module';
import { PortfolioModule } from './portfolio/portfolio.module';


@Module({
  imports: [ConfigModule.forRoot(),
  MulterModule.register({
    dest: './uploads',
  }),
  TypeOrmModule.forFeature([User, Product, Role]),
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    subscribers: [join(__dirname, '**', '*.subscriber.{ts,js}')],
    synchronize: true,
    // logging: true,
  }),
    AuthModule,
    UsersModule,
    RolesModule,
    ProductsModule,
    ProductTypesModule,
    ServicesModule,
    TransactionsModule,
    OrdersModule,
    MaterialsModule,
    CardsModule,
    AddressesModule,
    PortfolioModule],
  controllers: [AppController],
  providers: [AppService, UsersService, JwtService, ProductsService
  ],
})
export class AppModule { }
