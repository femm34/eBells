import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(signInData: any): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
}
