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
exports.ProductTypesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const product_types_service_1 = require("./product_types.service");
const create_product_type_dto_1 = require("./dto/create-product_type.dto");
const update_product_type_dto_1 = require("./dto/update-product_type.dto");
const auth_guard_1 = require("../auth/auth.guard");
const swagger_1 = require("@nestjs/swagger");
let ProductTypesController = class ProductTypesController {
    constructor(productTypesService) {
        this.productTypesService = productTypesService;
    }
    create(createProductTypeDto) {
        return this.productTypesService.create(createProductTypeDto);
    }
    findAll() {
        return this.productTypesService.findAll();
    }
    findOne(id) {
        return this.productTypesService.findOne(+id);
    }
    update(id, updateProductTypeDto) {
        return this.productTypesService.update(+id, updateProductTypeDto);
    }
    remove(id) {
        return this.productTypesService.remove(+id);
    }
};
exports.ProductTypesController = ProductTypesController;
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/product_type.entity").ProductType }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_type_dto_1.CreateProductTypeDto]),
    __metadata("design:returntype", void 0)
], ProductTypesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/product_type.entity").ProductType] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductTypesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/product_type.entity").ProductType }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductTypesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/product_type.entity").ProductType }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_type_dto_1.UpdateProductTypeDto]),
    __metadata("design:returntype", void 0)
], ProductTypesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductTypesController.prototype, "remove", null);
exports.ProductTypesController = ProductTypesController = __decorate([
    (0, swagger_1.ApiTags)('Product Types'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('product-types'),
    __metadata("design:paramtypes", [product_types_service_1.ProductTypesService])
], ProductTypesController);
//# sourceMappingURL=product_types.controller.js.map