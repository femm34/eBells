"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductType = void 0;
const openapi = require("@nestjs/swagger");
const product_entity_1 = require("../../products/entities/product.entity");
const typeorm_1 = require("typeorm");
let ProductType = class ProductType {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, product_type_name: { required: true, type: () => String }, products: { required: true, type: () => [require("../../products/entities/product.entity").Product] } };
    }
};
exports.ProductType = ProductType;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ primaryKeyConstraintName: "product_type_id" }),
    __metadata("design:type", Number)
], ProductType.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductType.prototype, "product_type_name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_entity_1.Product, (product) => product.product_type_id),
    __metadata("design:type", Array)
], ProductType.prototype, "products", void 0);
exports.ProductType = ProductType = __decorate([
    (0, typeorm_1.Entity)()
], ProductType);
//# sourceMappingURL=product_type.entity.js.map