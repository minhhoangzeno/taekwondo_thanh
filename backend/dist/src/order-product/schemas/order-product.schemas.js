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
exports.OrderProductSchema = exports.OrderProduct = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const order_schemas_1 = require("../../order/schemas/order.schemas");
const product_schemas_1 = require("../../product/schemas/product.schemas");
let OrderProduct = class OrderProduct {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], OrderProduct.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }),
    __metadata("design:type", product_schemas_1.Product)
], OrderProduct.prototype, "product", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }),
    __metadata("design:type", order_schemas_1.Order)
], OrderProduct.prototype, "order", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], OrderProduct.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], OrderProduct.prototype, "price", void 0);
OrderProduct = __decorate([
    (0, mongoose_1.Schema)()
], OrderProduct);
exports.OrderProduct = OrderProduct;
exports.OrderProductSchema = mongoose_1.SchemaFactory.createForClass(OrderProduct);
//# sourceMappingURL=order-product.schemas.js.map