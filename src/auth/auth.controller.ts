import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  @HttpCode(HttpStatus.OK)
  @Post()
  async signIn(@Body() signInData) {
    return await this.authService.signIn(signInData.username, signInData.password)
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }
}
