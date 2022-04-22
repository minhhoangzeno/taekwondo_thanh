import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AttendanceUser, AttendanceUserDocument } from './schemas/attendance-user.schemas';

@Injectable()
export class AttendanceUserService {
  constructor(
    @InjectModel(AttendanceUser.name) private attendanceUserModel: Model<AttendanceUserDocument>
  ) { }

  async findAttendanceByUser(user) {
    return this.attendanceUserModel.find({ user }).populate("attendance", "title startDate endDate", "Attendance")
  }

  async statisticAttendanceByUser(user) {
    let attendanceUserNotPaids = await this.attendanceUserModel.find({ user, status: 'Đã điểm danh' });
    let attendanceUserPaids = await this.attendanceUserModel.find({ user });
    return {
      attendanceUserNotPaids: attendanceUserNotPaids.length,
      attendanceUserPaids: attendanceUserPaids.length
    }
  }

  async statisticAttendanceByAdmin(attendanceId) {
    let attendanceUserNotPaids = await this.attendanceUserModel.find({ attendance: attendanceId, status: 'Chưa điểm danh' });
    let attendanceUserPaids = await this.attendanceUserModel.find({ attendance: attendanceId, status: 'Đã điểm danh' });
    let attendanceUserTotal = await this.attendanceUserModel.find({ attendance: attendanceId });
    return {
      attendanceUserNotPaids: attendanceUserNotPaids ? attendanceUserNotPaids.length : 0,
      attendanceUserPaids: attendanceUserPaids ? attendanceUserPaids.length : 0,
      attendanceUserTotal: attendanceUserTotal ? attendanceUserTotal.length :0
    }
  }

  async attendanceUserStatus(attendanceUserDto, user) {
    let attendanceUser = await this.attendanceUserModel.findOne({ attendance: attendanceUserDto.attendance, user: user }).populate("attendance", "code", "Attendance");
    if (attendanceUser) {
      if (attendanceUser.attendance.code == attendanceUserDto.code?.trim()) {
        attendanceUser.status = "Đã điểm danh";
        return attendanceUser.save();
      } else {
        throw new HttpException("Mã code nhập không đúng", 200)
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

}
