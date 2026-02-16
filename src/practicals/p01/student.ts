export class Student {
    firstname? : string;
    lastname? :string;

    printName(name : string,last : string): void {

        if(name) {
            console.log(`${name} ${last}`)
        }
    }

}
