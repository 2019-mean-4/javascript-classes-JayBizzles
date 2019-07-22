export class person{
    firstName: string;
    lastName: string;
    age: number;
    isAlive: boolean;
        constructor(firstName: string, lastName:string, age: number){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.isAlive = true;
        }
}

 humanoidA = new person("fname", "lname", 12);

