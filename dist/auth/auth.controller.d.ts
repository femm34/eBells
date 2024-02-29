import { AuthService } from './auth.service';
import { AuthDto } from './auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(authDto: AuthDto): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
}
