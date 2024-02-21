"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const path_1 = require("path");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const orders_module_1 = require("./orders/orders.module");
const product_types_module_1 = require("./product_types/product_types.module");
const product_entity_1 = require("./products/entities/product.entity");
const products_module_1 = require("./products/products.module");
const products_service_1 = require("./products/products.service");
const roles_module_1 = require("./roles/roles.module");
const services_module_1 = require("./services/services.module");
const transactions_module_1 = require("./transactions/transactions.module");
const user_entity_1 = require("./users/entities/user.entity");
const users_module_1 = require("./users/users.module");
const users_service_1 = require("./users/users.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, product_entity_1.Product]),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                entities: [(0, path_1.join)(__dirname, '**', '*.entity.{ts,js}')],
                subscribers: [(0, path_1.join)(__dirname, '**', '*.subscriber.{ts,js}')],
                synchronize: true,
            }),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            roles_module_1.RolesModule,
            products_module_1.ProductsModule,
            product_types_module_1.ProductTypesModule,
            services_module_1.ServicesModule,
            transactions_module_1.TransactionsModule,
            orders_module_1.OrdersModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, users_service_1.UsersService, jwt_1.JwtService, products_service_1.ProductsService
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map