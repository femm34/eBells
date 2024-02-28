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
exports.Product = void 0;
const openapi = require("@nestjs/swagger");
const order_entity_1 = require("../../orders/entities/order.entity");
const product_type_entity_1 = require("../../product_types/entities/product_type.entity");
const typeorm_1 = require("typeorm");
let Product = class Product {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, product_name: { required: true, type: () => String }, price: { required: true, type: () => Number }, stock: { required: true, type: () => Number }, description: { required: true, type: () => String }, material: { required: true, type: () => String }, image_path: { required: true, type: () => String }, product_type_id: { required: true, type: () => require("../../product_types/entities/product_type.entity").ProductType }, orders: { required: true, type: () => [require("../../orders/entities/order.entity").Order] } };
    }
};
exports.Product = Product;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ primaryKeyConstraintName: "product_id" }),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "product_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Product.prototype, "stock", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "material", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "image_path", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_type_entity_1.ProductType, (product_type) => product_type.products),
    (0, typeorm_1.JoinColumn)({ name: 'product_type_id' }),
    __metadata("design:type", product_type_entity_1.ProductType)
], Product.prototype, "product_type_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, (order) => order.product),
    __metadata("design:type", Array)
], Product.prototype, "orders", void 0);
exports.Product = Product = __decorate([
    (0, typeorm_1.Entity)()
], Product);
//# sourceMappingURL=product.entity.js.map