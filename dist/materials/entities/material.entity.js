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
exports.Material = void 0;
const openapi = require("@nestjs/swagger");
const product_entity_1 = require("../../products/entities/product.entity");
const typeorm_1 = require("typeorm");
let Material = class Material {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, material_name: { required: true, type: () => String }, products: { required: true, type: () => [require("../../products/entities/product.entity").Product] } };
    }
};
exports.Material = Material;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ primaryKeyConstraintName: "role_id" }),
    __metadata("design:type", Number)
], Material.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Material.prototype, "material_name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_entity_1.Product, (product) => product.material),
    __metadata("design:type", Array)
], Material.prototype, "products", void 0);
exports.Material = Material = __decorate([
    (0, typeorm_1.Entity)()
], Material);
//# sourceMappingURL=material.entity.js.map