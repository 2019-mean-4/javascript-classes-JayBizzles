class bankAccount{
    owner: string;
    balance: number;
    transactions: number [];


getBalance(){
    return this.balance;
}

withdrawal(amount:number){
    this.transactions.push(amount);
    return this.balance = this.balance - amount;

}

deposit(amount:number){
    this.transactions.push(amount);
    return this.balance = this.balance + amount;
}

}