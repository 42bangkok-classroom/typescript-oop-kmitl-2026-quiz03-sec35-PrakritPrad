export class Person {
    static COUNTRY : string = "Thailand";
    firstname?: string;
    lastname?: string;
    private age? :number;
    getFullName() {
        console.log(`${this.firstname} ${this.lastname}`)

    }
    setAge(age : number ) {
        this.age = age;

    }
    getAge() {
        console.log(this.age);
    }

}