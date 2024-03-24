import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AddressesModule } from './addresses/addresses.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CardsModule } from './cards/cards.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { MaterialsModule } from './materials/materials.module';
import { OrdersModule } from './orders/orders.module';
import { PortfolioModule } from './portfolio/portfolio.module';
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
import { QuotationModule } from './quotation/quotation.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { Quotation } from './quotation/entities/quotation.entity';

@Module({
  imports: [ConfigModule.forRoot(),

  MulterModule.register({
    dest: './uploads',
  }),
  MailerModule.forRoot({
    transport: {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'femm15.mm@gmail.com',
        pass: 'wckanymcsyavfxxw',
      },
    },
    defaults: {
      from: '"Arca de la alianza" <arcadelaalianza@gmail.com>',
    },
  }),
  TypeOrmModule.forFeature([User, Product, Role, Quotation]),
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
    PortfolioModule,
    CloudinaryModule,
    QuotationModule],
  controllers: [AppController],
  providers: [AppService, UsersService, JwtService, ProductsService,
  ],
})
export class AppModule { }
