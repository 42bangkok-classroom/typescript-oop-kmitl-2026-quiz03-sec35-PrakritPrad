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

            return true
        }
        else {
 ;
            return false
        }
    }
    getLoginAttempts() {
        return User.LOGIN_ATTEMPTS++  ;
    }

}
