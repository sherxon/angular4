var bankAccount: {
    money: number,
    deposit: (value: number) => void
} = {
        money: 2000,
        deposit: function (value: number): void { 
             this.money += value;
        } 
    }

let myself: {
    name: string,
    bankAccount: any,
    hobbies: string[]
} = {
        name: "Asaad",
        bankAccount: bankAccount,
        hobbies: ["Violin", "Cooking"]
    }

myself.bankAccount.deposit(3000);
console.log(myself);