"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTypesModule = void 0;
const common_1 = require("@nestjs/common");
const product_types_service_1 = require("./product_types.service");
const product_types_controller_1 = require("./product_types.controller");
const typeorm_1 = require("@nestjs/typeorm");
const product_type_entity_1 = require("./entities/product_type.entity");
const role_entity_1 = require("../roles/entities/role.entity");
let ProductTypesModule = class ProductTypesModule {
};
exports.ProductTypesModule = ProductTypesModule;
exports.ProductTypesModule = ProductTypesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([product_type_entity_1.ProductType, role_entity_1.Role])],
        controllers: [product_types_controller_1.ProductTypesController],
        providers: [product_types_service_1.ProductTypesService],
    })
], ProductTypesModule);
//# sourceMappingURL=product_types.module.js.map