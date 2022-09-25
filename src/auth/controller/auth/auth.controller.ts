import {
  Controller,
  Request,
  Post,
  UseGuards,
  Body,
  Get,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { AuthService } from 'src/auth/service/auth.service';
import { Users } from 'src/auth/user.entity';

@Controller('api/auth/')
export class AuthController {
  constructor(private usersService: AuthService) {}

  @Post('signup')
  async signup(@Body() user: Users): Promise<Users> {
    return this.usersService.signup(user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.usersService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
