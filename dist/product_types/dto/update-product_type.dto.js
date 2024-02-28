"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductTypeDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_product_type_dto_1 = require("./create-product_type.dto");
class UpdateProductTypeDto extends (0, mapped_types_1.PartialType)(create_product_type_dto_1.CreateProductTypeDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateProductTypeDto = UpdateProductTypeDto;
//# sourceMappingURL=update-product_type.dto.js.map