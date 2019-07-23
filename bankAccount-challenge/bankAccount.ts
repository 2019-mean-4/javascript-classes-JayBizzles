export class bankAccount{
    owner: string;
    balance: number;
    transactions: any [];

    constructor(owner: string, balance:number){
        //this = {}
        this.owner = owner;
        this.balance = balance;
        this.transactions = [];
        // return this 
    }

    getBalance(){
        return this.balance;
    }

    withdrawal(amount:number){
        this.transactions.push(amount);
        return this.balance -= amount;

    }

    deposit(amount:number){
        this.transactions.push(amount);
        return this.balance += amount;
    }

}
