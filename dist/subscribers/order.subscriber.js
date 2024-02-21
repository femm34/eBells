"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSubscriber = void 0;
const order_entity_1 = require("../orders/entities/order.entity");
const product_entity_1 = require("../products/entities/product.entity");
const typeorm_1 = require("typeorm");
let OrderSubscriber = class OrderSubscriber {
    listenTo() {
        return order_entity_1.Order;
    }
    async beforeInsert(event) {
        const { entity, manager } = event;
        const productFound = await manager.getRepository(product_entity_1.Product).findOne({ where: { id: entity.product.id } });
        if (productFound.stock < entity.quantity) {
            throw new Error(`Not stock enough by ${productFound.product_name} product`);
        }
        productFound.stock -= entity.quantity;
        return await manager.getRepository(product_entity_1.Product).save(productFound);
    }
};
exports.OrderSubscriber = OrderSubscriber;
exports.OrderSubscriber = OrderSubscriber = __decorate([
    (0, typeorm_1.EventSubscriber)()
], OrderSubscriber);
//# sourceMappingURL=order.subscriber.js.map