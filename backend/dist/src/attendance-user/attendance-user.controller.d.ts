import { AttendanceUserService } from './attendance-user.service';
export declare class AttendanceUserController {
    private attendanceUserService;
    constructor(attendanceUserService: AttendanceUserService);
    changeAttendanceUserStatus(body: any, req: any): Promise<import("./schemas/attendance-user.schemas").AttendanceUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAttendanceByUser(req: any): Promise<(import("./schemas/attendance-user.schemas").AttendanceUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    statisticAttendanceByUser(req: any): Promise<{
        attendanceUserNotPaids: number;
        attendanceUserPaids: number;
    }>;
    statisticAttendanceByAdmim(attendanceId: any): Promise<{
        attendanceUserNotPaids: number;
        attendanceUserPaids: number;
        attendanceUserTotal: number;
    }>;
    changeAttendanceUserStatusByAdmin(body: any): Promise<import("./schemas/attendance-user.schemas").AttendanceUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
