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
exports.AttendanceUserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const attendance_user_schemas_1 = require("./schemas/attendance-user.schemas");
let AttendanceUserService = class AttendanceUserService {
    constructor(attendanceUserModel) {
        this.attendanceUserModel = attendanceUserModel;
    }
    async findAttendanceByUser(user) {
        return this.attendanceUserModel.find({ user }).populate("attendance", "title startDate endDate", "Attendance");
    }
    async statisticAttendanceByUser(user) {
        let attendanceUserNotPaids = await this.attendanceUserModel.find({ user, status: 'Đã điểm danh' });
        let attendanceUserPaids = await this.attendanceUserModel.find({ user });
        return {
            attendanceUserNotPaids: attendanceUserNotPaids.length,
            attendanceUserPaids: attendanceUserPaids.length
        };
    }
    async statisticAttendanceByAdmin(attendanceId) {
        let attendanceUserNotPaids = await this.attendanceUserModel.find({ attendance: attendanceId, status: 'Chưa điểm danh' });
        let attendanceUserPaids = await this.attendanceUserModel.find({ attendance: attendanceId, status: 'Đã điểm danh' });
        let attendanceUserTotal = await this.attendanceUserModel.find({ attendance: attendanceId });
        return {
            attendanceUserNotPaids: attendanceUserNotPaids ? attendanceUserNotPaids.length : 0,
            attendanceUserPaids: attendanceUserPaids ? attendanceUserPaids.length : 0,
            attendanceUserTotal: attendanceUserTotal ? attendanceUserTotal.length : 0
        };
    }
    async attendanceUserStatus(attendanceUserDto, user) {
        var _a;
        let attendanceUser = await this.attendanceUserModel.findOne({ attendance: attendanceUserDto.attendance, user: user }).populate("attendance", "code", "Attendance");
        if (attendanceUser) {
            if (attendanceUser.attendance.code == ((_a = attendanceUserDto.code) === null || _a === void 0 ? void 0 : _a.trim())) {
                attendanceUser.status = "Đã điểm danh";
                return attendanceUser.save();
            }
            else {
                throw new common_1.HttpException("Mã code nhập không đúng", 200);
            }
        }
    }
    async attendanceUserStatusByAdmin(attendanceUserDto) {
        let attendanceUser = await this.attendanceUserModel.findOne({ attendance: attendanceUserDto.attendance, user: attendanceUserDto.user });
        if (attendanceUser) {
            attendanceUser.status = attendanceUserDto.status.trim();
            return attendanceUser.save();
        }
    }
};
AttendanceUserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(attendance_user_schemas_1.AttendanceUser.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AttendanceUserService);
exports.AttendanceUserService = AttendanceUserService;
//# sourceMappingURL=attendance-user.service.js.map