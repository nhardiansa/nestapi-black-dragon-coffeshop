import { Injectable, Post } from '@nestjs/common';
import { LoginDto, LoginResponseDto, RegisterDto } from './dto/auth.dto';

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
}
