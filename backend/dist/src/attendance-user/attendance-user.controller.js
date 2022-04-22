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
exports.AttendanceUserController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guard/jwt-auth.guard");
const attendance_user_service_1 = require("./attendance-user.service");
let AttendanceUserController = class AttendanceUserController {
    constructor(attendanceUserService) {
        this.attendanceUserService = attendanceUserService;
    }
    async changeAttendanceUserStatus(body, req) {
        return this.attendanceUserService.attendanceUserStatus(body, req.user._doc._id);
    }
    async findAttendanceByUser(req) {
        return this.attendanceUserService.findAttendanceByUser(req.user._doc._id);
    }
    async statisticAttendanceByUser(req) {
        return this.attendanceUserService.statisticAttendanceByUser(req.user._doc._id);
    }
    async statisticAttendanceByAdmim(attendanceId) {
        return this.attendanceUserService.statisticAttendanceByAdmin(attendanceId);
    }
    async changeAttendanceUserStatusByAdmin(body) {
        return this.attendanceUserService.attendanceUserStatusByAdmin(body);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('status'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AttendanceUserController.prototype, "changeAttendanceUserStatus", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AttendanceUserController.prototype, "findAttendanceByUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('statistic'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AttendanceUserController.prototype, "statisticAttendanceByUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('statistic-admin/:attendanceId'),
    __param(0, (0, common_1.Param)('attendanceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AttendanceUserController.prototype, "statisticAttendanceByAdmim", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('status-admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AttendanceUserController.prototype, "changeAttendanceUserStatusByAdmin", null);
AttendanceUserController = __decorate([
    (0, common_1.Controller)('attendance-user'),
    __metadata("design:paramtypes", [attendance_user_service_1.AttendanceUserService])
], AttendanceUserController);
exports.AttendanceUserController = AttendanceUserController;
//# sourceMappingURL=attendance-user.controller.js.map