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
exports.FeedbackController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guard/jwt-auth.guard");
const feedback_service_1 = require("./feedback.service");
let FeedbackController = class FeedbackController {
    constructor(feedbackService) {
        this.feedbackService = feedbackService;
    }
    async getFeedback() {
        return this.feedbackService.findAll();
    }
    async createFeedback(body, req) {
        return this.feedbackService.create(body.content, req.user._doc._id);
    }
    async remove(id) {
        return this.feedbackService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FeedbackController.prototype, "getFeedback", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FeedbackController.prototype, "createFeedback", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FeedbackController.prototype, "remove", null);
FeedbackController = __decorate([
    (0, common_1.Controller)('feedback'),
    __metadata("design:paramtypes", [feedback_service_1.FeedbackService])
], FeedbackController);
exports.FeedbackController = FeedbackController;
//# sourceMappingURL=feedback.controller.js.map