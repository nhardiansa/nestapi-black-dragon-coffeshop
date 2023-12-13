import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  LoginDto,
  LoginResponseDto,
  RegisterDto,
  VerifyResetPasswordDto,
} from './dto/auth.dto';
import { Response } from 'express';
import { ResponseDto, SimpleResponseDto } from 'src/dtos/response.dtos';
import { API_PREFIX } from 'src/helpers/constants';

@Controller(`${API_PREFIX}/auth`)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() userData: RegisterDto,
    @Res() res: Response,
  ): Promise<void> {
    try {
      const result = await this.authService.register(userData);
      const response: SimpleResponseDto = {
        success: true,
        message: result,
      };

      res.status(HttpStatus.CREATED).json(response);
    } catch (error) {
      const response: SimpleResponseDto = {
        success: false,
        message: error.message,
      };
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(response);
    }
  }

  @Post('login')
  async login(@Body() userData: LoginDto, @Res() res: Response): Promise<void> {
    try {
      const result = await this.authService.login(userData);
      const response: ResponseDto<LoginResponseDto> = {
        success: true,
        message: 'Login success',
        data: result,
      };

      res.status(HttpStatus.OK).json(response);
    } catch (error) {
      const response: SimpleResponseDto = {
        success: false,
        message: error.message,
      };
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(response);
    }
  }

  @Post('verify-reset-password')
  async verifyResetPassword(
    @Body() data: VerifyResetPasswordDto,
    @Res() res: Response,
  ): Promise<void> {
    try {
      console.log(data);
      const result = await this.authService.verifyResetPassword(data);
      const response: SimpleResponseDto = {
        success: true,
        message: result,
      };

      res.status(HttpStatus.OK).json(response);
    } catch (error) {
      const response: ResponseDto<VerifyResetPasswordDto> = {
        success: false,
        message: error.message,
        errors: error.errors,
      };
      res.status(error.code || HttpStatus.INTERNAL_SERVER_ERROR).json(response);
    }
  }
}
