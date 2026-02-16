export class Person {
    static COUNTRY : string = "Thailand";
    firstname?: string;
    lastname?: string;
    private age :number = 25;
    getFullName() {
        return `${this.firstname} ${this.lastname}`;

    }
    setAge(age : number ) {
        if(!isNaN(age)){

            this.age = age;
        }

    }
    getAge(): number {
        return this.age;
    }

}