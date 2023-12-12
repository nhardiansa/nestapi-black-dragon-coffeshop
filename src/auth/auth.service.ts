import { Injectable, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  @Post('register')
  async register(userData: RegisterDto): Promise<string> {
    const { email } = userData;
    return `Register user with email ${email} success`;
  }

  @Post('login')
  async login() {}
}
