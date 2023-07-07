
export class LoginRequest {
    user: string;
    pswd: string;
    constructor(user: string, pswd: string) {
        this.user = user;
        this.pswd = pswd;

    }
}