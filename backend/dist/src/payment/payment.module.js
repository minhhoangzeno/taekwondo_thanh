"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const payment_user_schemas_1 = require("../payment-user/schemas/payment-user.schemas");
const user_schemas_1 = require("../user/schemas/user.schemas");
const payment_controller_1 = require("./payment.controller");
const payment_service_1 = require("./payment.service");
const payment_schemas_1 = require("./schemas/payment.schemas");
let PaymentModule = class PaymentModule {
};
PaymentModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: payment_schemas_1.Payment.name, schema: payment_schemas_1.PaymentSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: payment_user_schemas_1.PaymentUser.name, schema: payment_user_schemas_1.PaymentUserSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: user_schemas_1.User.name, schema: user_schemas_1.UserSchema }])
        ],
        controllers: [payment_controller_1.PaymentController],
        providers: [payment_service_1.PaymentService]
    })
], PaymentModule);
exports.PaymentModule = PaymentModule;
//# sourceMappingURL=payment.module.js.map