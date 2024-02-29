"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMaterialDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_material_dto_1 = require("./create-material.dto");
class UpdateMaterialDto extends (0, swagger_1.PartialType)(create_material_dto_1.CreateMaterialDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateMaterialDto = UpdateMaterialDto;
//# sourceMappingURL=update-material.dto.js.map