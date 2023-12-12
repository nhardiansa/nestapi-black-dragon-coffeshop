import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { Response } from 'express';
import { SimpleResponseDto } from 'src/dtos/response.dtos';
import { API_PREFIX } from 'src/helper/constants';

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
        // data: result,
      };

      res.status(HttpStatus.CREATED).json(response);
    } catch (error) {
      const response: SimpleResponseDto = {
        success: false,
        message: 'Failed to register',
      };
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(response);
    }
  }
}
