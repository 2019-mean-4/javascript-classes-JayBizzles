export class person{
    firstName: string;
    lastName: string;
    age: number;
    isAlive: boolean;
        constructor(firstName: string, lastName:string, age: number, isAlive: boolean){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.isAlive = true;
        }
}

let humanoidA = new person("fname", "lname", 12, true);

