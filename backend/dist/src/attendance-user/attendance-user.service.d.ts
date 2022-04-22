import { Model } from 'mongoose';
import { AttendanceUser, AttendanceUserDocument } from './schemas/attendance-user.schemas';
export declare class AttendanceUserService {
    private attendanceUserModel;
    constructor(attendanceUserModel: Model<AttendanceUserDocument>);
    findAttendanceByUser(user: any): Promise<(AttendanceUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    statisticAttendanceByUser(user: any): Promise<{
        attendanceUserNotPaids: number;
        attendanceUserPaids: number;
    }>;
    statisticAttendanceByAdmin(attendanceId: any): Promise<{
        attendanceUserNotPaids: number;
        attendanceUserPaids: number;
        attendanceUserTotal: number;
    }>;
    attendanceUserStatus(attendanceUserDto: any, user: any): Promise<AttendanceUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    attendanceUserStatusByAdmin(attendanceUserDto: any): Promise<AttendanceUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
