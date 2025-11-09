function createbankAccount() {
    let balance = 0;

    return {

        deposit: function (amount) {
            balance += amount;
            console.log(`Deposited ${amount}, available balance is ${balance}`);
        }
        ,
        getBalance: function () {
            return balance;
        }
        ,
        withdraw: function (amount) {
            if (balance > amount) {
                balance -= amount;
                console.log(`Withdrew ${amount}, available balance is ${balance}`);
            } else {
                console.log(`Insufficient balance. Available balance is ${balance} We're unable to process your request.`);
            }
        }
    }

}

const myAccount = createbankAccount();
myAccount.deposit(1000);
myAccount.withdraw(500);
console.log(`Current Balance: ${myAccount.getBalance()}`);
myAccount.withdraw(600);