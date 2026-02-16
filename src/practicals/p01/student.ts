export class Student {
    firstname? : string;
    lastname? :string;

    printName(): void {

        this.firstname = "john" ;
        this.lastname ="Doe";
        console.log(`${this.firstname} ${this.lastname}`)
    }

}
