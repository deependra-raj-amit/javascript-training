// let transaction = [200, 300, 400, 500, 500, -4500,600, 9000]
// let balance = 1000
// for(let i = 0; i<transaction.length; i++){
//     balance+= transaction[i];   
// }
// console.log(balance)


// let loanAmount = 10000;
// let repaymentAmount = 1000

// while(loanAmount>0){
//     loanAmount-=repaymentAmount;
//     console.log("loan Amount Remaining: " +loanAmount)
//     console.log(`Remaining: ${loanAmount}`)
// }

// const message = `This is a 
// multiline string`;
// console.log(message);

// const a = 5, b = 3;
// console.log(`The sum of ${a} and ${b} is ${a + b}.`);



// let tries = 0;
// let pinCorrect = false;

// do {
//   tries++;
//   pinCorrect = tries === 5;
//   console.log(`Try ${tries}`);
// } while (!pinCorrect);

// console.log("Pin correct after " + tries+ " tries");



// const customers = [
//     { name: "Alie", loanAmount: 5000 },
//     { name: "Bob", loanAmount: 12000 },
//     { name: "Charlie", loanAmount: 7000 },
// ];

// for (const customer of customers) {
//     console.log(`Customer Name: ${customer.name}`);
//     console.log(`Loan Amount: ₹${customer.loanAmount}`);
//     console.log("--------------------------");
// }

// function calculateInterest(balance, rate) {
//     return (balance * rate) / 100;
//   }

//   console.log(calculateInterest(1000, 7))




// const getLoanEligibility = function (salary) {
//     if(salary < 30000){
//         //console.log("Not Eligible for Loan")  //will give undefined as return value is not defined
//         return "Not Eligible for Loan"
//     }else {
//         //console.log("Eligible for loan")     //will give undefined as return value is not defined
//         return "Eligible for loan"
//     }
    
//   };
  
// console.log(getLoanEligibility(20000))
// console.log(getLoanEligibility(30000))
// console.log(getLoanEligibility(40000))


// const isPremiumCustomer = (balance) => balance > 100000;

// console.log(isPremiumCustomer(200000))
// console.log(isPremiumCustomer(50000))
// console.log(isPremiumCustomer(20000))


// function bank() {
//     const bankName = "Secure Bank";
  
//     function branch() {
//       console.log(bankName);
//     }
  
//     branch();
//   }

//   bank();


//   function transaction1() {
//     if (true) {
//       var type = "Deposit";
//       let amount = 1000;
//       console.log("value used under block scope: " + amount);
//     }
//     console.log(type);   // 'Deposit'
//     //console.log(amount); // Error: amount is not defined
//   }
// transaction1();




// function createLimitChecker(user, limit) {
//     return function(transactionAmount) {
//         console.log(`User: ${user}, Limit: ${limit}`);
//         console.log(`Transaction Amount: ${transactionAmount}`)
//       return transactionAmount <= limit;
//     };
//   }
  
// const Deependra = createLimitChecker("Deependra", 200000);
// const Aman = createLimitChecker("Aman", 150000);
// const Arun = createLimitChecker("Arun", 200000);
// const Chintu = createLimitChecker("Chin", 300000);

// console.log(Deependra(50000));
// console.log(Arun(50000));
// console.log(Aman(50000));
// console.log(Chintu(50000));





// function notifyCustomer(amount) {
//     console.log(`Notification: Your transaction of ₹${amount} was successful.`);
//   }
  
//   function logToAudit(amount) {
//     console.log(`AUDIT: Processed transaction of ₹${amount}`);
//   }
  
//   function processTransaction(amount, callback) {
//     callback(amount);
//   }
//   function callBack(callback){
//     console.log("Callback is called");
//     callback();
//   }
  
//   processTransaction(2000, notifyCustomer);
//   processTransaction(2000, logToAudit);
//   callBack(notifyCustomer);
//   callBack(logToAudit);
// //   callBack(callBack);
// //     callBack(processTransaction);

// console.log(this)

// const account = {
//     name: "John",
//     balance: 3000,
//     showBalance: function() {
//       console.log(`${this.name}'s balance is ₹${this.balance}`);
//     }
//   };
  
//   account.showBalance(); 


//   const account1 = {
//     balance: 3000,
//     showBalance: () => {
//       console.log(this.balance); // undefined because 'this' is not bound to account
//     }
//   };
//   account1.showBalance();
  


// Why Arrow Function Invented

// Example 1: Using a REGULAR function inside setTimeout (Will not work)
// const account2 = {
//     name: "John",
//     balance: 3000,
//     showBalance: function () {
//       console.log("Checking balance (regular function)...");
//       setTimeout(function () {
//         console.log("Balance (regular):", this.balance); // this is not account2
//       }, 2000);
//     }
//   };
  
//   account2.showBalance(); // Output: undefined after 2 seconds

// Example 2: Using an ARROW function inside setTimeout (Will work)
//   const account3 = {
//     name: "John",
//     balance: 3000,
//     showBalance: function ()  {
//       console.log("Checking balance (Arrow Function)...");
//       setTimeout(() => {
//         console.log("Balance (Arrow):", this.balance); // this is not account2
//       }, 3000);
//     }
//   };
  
//   account3.showBalance(); // Output: undefined after 2 seconds

// Objects Examples: 
// Object Literals

//   const customer = {
//     id: "C001",
//     name: "Deependra",
//     accountType: "Savings",
//     balance: 10000,
//     status: "Active",
//     withdraw(amount) {
//       if (this.balance >= amount) {
//         this.balance -= amount;
//         return `Withdrawal of ₹${amount} successful. New balance: ₹${this.balance}`;
//       } else {
//         const requiredMore = amount - this.balance;
//         return `Insufficient balance... Available balance: ₹${this.balance} reqired more : ₹${requiredMore}`;
//       }
//     }
//   };
  
//   console.log(customer.withdraw(55000));
  
// Constructor Functions

// function Customer(id, name, balance) {
//     this.id = id;
//     this.name = name;
//     this.balance = balance;
//     this.getDetails = function() {
//       return `Customer Id ${id} | ${this.name} has a balance of ₹${this.balance}`;
//     };
//   }
  
//   const customer1 = new Customer("C001", "Priya", 8000);
//   const customer2 = new Customer("C002", "Ravi", 12000);
  
//   console.log(customer1.getDetails()); 
//   console.log(customer2.getDetails());  


// Classes (ES6+)
// class Customer {
//     constructor(id, name, balance, type) {
//       this.id = id;
//       this.name = name;
//       this.balance = balance;
//       this.accountType = type;
//     }
  
//     getSummary() {
//       //console.log("_________________________________________________________________________________________________");
//       return `Customer ID: ${this.id} | Customer Name: ${this.name} | Account Type: ${this.accountType} | Balance: ₹${this.balance}`;
//     }
//   }
  
//   const c1 = new Customer("B101", "Neha", 15000, "Current");
//   const c2 = new Customer("B102", "Sanjay", 55000, "Saving");
//   const c3 = new Customer("B103", "Aakash", 18000, "Current");
//   console.log(c1.getSummary());
//   console.log(c2.getSummary());
//   console.log(c3.getSummary());


// Prototypes & Inheritance
// Prototype Example:

// function Account(holder, balance) {
//     this.holder = holder;
//     this.balance = balance;
//   }
//   Account.prototype.deposit = function(amount) {
//     this.balance += amount;
//   };
//   Account.prototype.showBalance = function(){
//     return `Account Holder: ${this.holder} | Balance: ₹${this.balance}`;
//   }
//   const a1 = new Account("Deependra", 5000);
//   a1.deposit(1000)
//   console.log(a1.showBalance())

// Class-based Inheritance Example:

// class Account {
//   constructor(holder, balance) {
//     this.holder = holder;
//     this.balance = balance;
//   }

//   deposit(amount) {
//     this.balance += amount;
//   }
// }

// class SavingsAccount extends Account {
//   constructor(holder, balance, interestRate) {
//     super(holder, balance);
//     this.interestRate = interestRate;
//   }

//   calculateInterest() {
//     return this.balance * this.interestRate;
//   }
  
// }

// const sa = new SavingsAccount("Amit", 10000, 0.03);
// console.log(sa.calculateInterest()); 

//Map Example: Transforms each element and returns a new array.

const balances = [5000, 10000, 15000];
const withInterest = balances.map(b => b + b * 0.5);
const total = balances.reduce((acc, val) => acc + val, 0);   //reduce() -> Reduces the array to a single value.
const totalWithInterest = withInterest.reduce((acc, val) => acc + val, 0);
console.log(withInterest);
console.log("Total amount without interest = " + total);
console.log("Total amount interest = " + totalWithInterest);


// filter()
// Returns a new array of elements that pass the condition.

const customers = [
    { name: "Aakash", balance: 500000 },
    { name: "Kumar", balance: 80000 },
    { name: "Mishra", balance: 96000 },
    { name: "Sam", balance: 80000 },
    { name: "Abhishek", balance: 7800000 },
    { name: "Pandey", balance: 750000 },
  ];
  
  const premiumCustomers = customers.filter(c => c.balance >= 100000);
  console.log(premiumCustomers);
  

//Object Destructuring:
const transactions = [
    { id: "T001", amount: 2500, type: "Transfer" },
    { id: "T002", amount: 1500, type: "Deposit" },
    { id: "T003", amount: 3000, type: "Withdrawal" },
  
  ];
  //const { amount, type } = transaction;
  transactions.forEach((transaction) => {
    console.log(`The amount of ${transaction.amount} rupees is transferred by the method of ${transaction.type} referring to the transaction Id : ${transaction.id}`);
  })
  
  
  
  