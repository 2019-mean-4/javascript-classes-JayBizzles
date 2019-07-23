export class person{
    firstName: string;
    lastName: string;
    age: number;
    isAlive: boolean;
        constructor(firstName: string, lastName:string, age: number, isAlive:boolean=true){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.isAlive = isAlive;
        }
}

 let humanoidA = new person("fname", "lname", 12);

