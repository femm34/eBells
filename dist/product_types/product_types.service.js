"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTypesService = void 0;
const common_1 = require("@nestjs/common");
let ProductTypesService = class ProductTypesService {
    create(createProductTypeDto) {
        return 'This action adds a new productType';
    }
    findAll() {
        return `This action returns all productTypes`;
    }
    findOne(id) {
        return `This action returns a #${id} productType`;
    }
    update(id, updateProductTypeDto) {
        return `This action updates a #${id} productType`;
    }
    remove(id) {
        return `This action removes a #${id} productType`;
    }
};
exports.ProductTypesService = ProductTypesService;
exports.ProductTypesService = ProductTypesService = __decorate([
    (0, common_1.Injectable)()
], ProductTypesService);
//# sourceMappingURL=product_types.service.js.map