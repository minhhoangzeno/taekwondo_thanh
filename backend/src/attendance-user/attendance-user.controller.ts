import { Body, Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { AttendanceUserService } from './attendance-user.service';

@Controller('attendance-user')
export class AttendanceUserController {
  constructor(private attendanceUserService: AttendanceUserService) { }


  @UseGuards(JwtAuthGuard)
  @Post('status')
  async changeAttendanceUserStatus(@Body() body, @Request() req) {
    return this.attendanceUserService.attendanceUserStatus(body, req.user._doc._id)
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAttendanceByUser(@Request() req) {
    return this.attendanceUserService.findAttendanceByUser(req.user._doc._id)
  }

  @UseGuards(JwtAuthGuard)
  @Get('statistic')
  async statisticAttendanceByUser(@Request() req) {
    return this.attendanceUserService.statisticAttendanceByUser(req.user._doc._id)
  }


  @UseGuards(JwtAuthGuard)
  @Get('statistic-admin/:attendanceId')
  async statisticAttendanceByAdmim(@Param('attendanceId') attendanceId) {
    return this.attendanceUserService.statisticAttendanceByAdmin(attendanceId)
  }


  @UseGuards(JwtAuthGuard)
  @Post('status-admin')
  async changeAttendanceUserStatusByAdmin(@Body() body) {
    return this.attendanceUserService.attendanceUserStatusByAdmin(body)
  }
}
