export class User {
    public username: string;
    private password: string;
    private LOGIN_ATTEMPTS: number = 0;
    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
    login(password: string): boolean {
        if (this.password === password) {
            this.LOGIN_ATTEMPTS++;
            return true
        }
        else {
            this.LOGIN_ATTEMPTS++;
            return false
        }
    }
    getLoginAttempts() {
        return this.LOGIN_ATTEMPTS;
    }

}
