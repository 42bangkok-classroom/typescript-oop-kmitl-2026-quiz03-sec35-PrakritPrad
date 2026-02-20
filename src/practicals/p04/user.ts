export class User {
    public username: string;
    private password: string;
    static LOGIN_ATTEMPTS: number = 0 ;
    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
    login(password: string): boolean {
        if (this.password === password) {
            User.LOGIN_ATTEMPTS ++ ;
            return true
        }
        else {
            User.LOGIN_ATTEMPTS ++ ;
            return false
        }
    }
    getLoginAttempts() {
        return User.LOGIN_ATTEMPTS ;
    }

}
