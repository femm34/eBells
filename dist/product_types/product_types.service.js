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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTypesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const product_type_entity_1 = require("./entities/product_type.entity");
const typeorm_2 = require("@nestjs/typeorm");
let ProductTypesService = class ProductTypesService {
    constructor(productTypeRepository) {
        this.productTypeRepository = productTypeRepository;
    }
    async create(createProductTypeDto) {
        const newProductType = this.productTypeRepository.create(createProductTypeDto);
        return await this.productTypeRepository.save(newProductType);
    }
    async findAll() {
        return await this.productTypeRepository.find();
    }
    async findOne(id) {
        return await this.productTypeRepository.findOne({ where: { id: id } });
    }
    async update(id, updateProductTypeDto) {
        await this.productTypeRepository.update(id, updateProductTypeDto);
        return await this.productTypeRepository.findOne({ where: { id: id } });
    }
    async remove(id) {
        return await this.productTypeRepository.delete(id);
    }
};
exports.ProductTypesService = ProductTypesService;
exports.ProductTypesService = ProductTypesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(product_type_entity_1.ProductType)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ProductTypesService);
//# sourceMappingURL=product_types.service.js.map