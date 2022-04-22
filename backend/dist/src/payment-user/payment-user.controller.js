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
exports.PaymentUserController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guard/jwt-auth.guard");
const payment_user_service_1 = require("./payment-user.service");
let PaymentUserController = class PaymentUserController {
    constructor(paymentUserService) {
        this.paymentUserService = paymentUserService;
    }
    async findPaymentByUser(req) {
        return this.paymentUserService.findPaymentByUser(req.user._doc._id);
    }
    async statisticPaymentByUser(req) {
        return this.paymentUserService.statisticPaymentByUser(req.user._doc._id);
    }
    async statisticPaymentByAdmin(paymentId) {
        return this.paymentUserService.statisticPaymentByAdmin(paymentId);
    }
    async paymentUserStatusByUser(paymentUserId) {
        return this.paymentUserService.paymentUserStatus(paymentUserId);
    }
    async getPayment(body, req, res) {
        return this.paymentUserService.createPayment(body, req, res);
    }
    async changePaymentUserStatusByAdmin(body) {
        return this.paymentUserService.paymentUserStatusByAdmin(body);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentUserController.prototype, "findPaymentByUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('statistic'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentUserController.prototype, "statisticPaymentByUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('statistic-admin/:paymentId'),
    __param(0, (0, common_1.Param)('paymentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentUserController.prototype, "statisticPaymentByAdmin", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('payment/:paymentUserId'),
    __param(0, (0, common_1.Param)('paymentUserId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentUserController.prototype, "paymentUserStatusByUser", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentUserController.prototype, "getPayment", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('status-admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentUserController.prototype, "changePaymentUserStatusByAdmin", null);
PaymentUserController = __decorate([
    (0, common_1.Controller)('payment-user'),
    __metadata("design:paramtypes", [payment_user_service_1.PaymentUserService])
], PaymentUserController);
exports.PaymentUserController = PaymentUserController;
//# sourceMappingURL=payment-user.controller.js.map