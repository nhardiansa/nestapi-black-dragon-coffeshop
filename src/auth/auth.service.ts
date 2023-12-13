import { Injectable, Post } from '@nestjs/common';
import {
  LoginDto,
  LoginResponseDto,
  RegisterDto,
  VerifyResetPasswordDto,
} from './dto/auth.dto';
import { CustomException } from 'src/helpers/helpers';

@Injectable()
export class AuthService {
  @Post('register')
  async register(userData: RegisterDto): Promise<string> {
    const { email } = userData;
    return `Register user with email ${email} success`;
  }

  @Post('login')
  async login(userData: LoginDto): Promise<LoginResponseDto> {
    console.log(userData);
    // expected returning access and refresh token
    return {
      accessToken: 'random-access-token',
      refreshToken: 'random-refresh-token',
    };
  }

  @Post('verify-reset-password')
  async verifyResetPassword(data: VerifyResetPasswordDto): Promise<string> {
    // if there is no email, then throw error

    // check if just email and account is not verified, then send email verification
    // but, if email verified, then send reset password email

    // if password and confirm password is not match, then throw error
    // if user send password and confirm password, then check if code is valid

    if (!data.password) {
      CustomException({
        message: 'Failed to verify reset password',
        status: 400,
        errors: {
          password: 'Password is required',
        },
      });
    }

    return 'Verify reset password success';
  }
}
