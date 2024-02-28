import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) { }

  async signIn(username: string, password: string) {
    const userFound = await this.usersService.findUserToLogin(username);
    if (!userFound || userFound.length === 0) {
      throw new UnauthorizedException('User not found');
    }
    const user = userFound[0];
    if (user.password !== password || user.username !== username) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { sub: user.id, username: user.username, role: user.role.role_name };
    try {
      return {
        access_token: this.jwtService.sign(payload,
          {
            secret: process.env.JWT_SECRET,
            expiresIn: '1h',
          }
        ),
      };
    } catch (error) {
      console.error('Error al firmar el token:', error.message);
      throw new InternalServerErrorException('Error al firmar el token');
    }

  }
}
