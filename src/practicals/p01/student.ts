export class Student {
    firstname? : string;
    lastname? :string;

    printName(name : string,last : string): void {

        this.firstname = name ;
        this.lastname =last;
        console.log(`${this.firstname} ${this.lastname}`)
    }

}
