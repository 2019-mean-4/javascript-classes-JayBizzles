"use strict";
exports.__esModule = true;
var bankAccount = /** @class */ (function () {
    function bankAccount(owner, balance) {
        //this = {}
        this.owner = owner;
        this.balance = balance;
        this.transactions = [];
        // return this 
    }
    bankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    bankAccount.prototype.withdrawal = function (amount) {
        this.transactions.push(amount);
        return this.balance -= amount;
    };
    bankAccount.prototype.deposit = function (amount) {
        this.transactions.push(amount);
        return this.balance += amount;
    };
    return bankAccount;
}());
exports.bankAccount = bankAccount;
