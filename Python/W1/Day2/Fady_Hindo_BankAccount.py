class BankAccount:

    def __init__(self, account, int_rate, balance = 0):
        self.account = account
        self.int_rate = int_rate
        self.balance = balance
    
    def deposit(self, amount):
        self.balance += amount
        return self
    
    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            return self
        else:
            self.balance -= 5
            return "Insufficient funds: Charging a $5 fee"
    
    def display_account_info(self):
        return f"Account#:{self.account} Balance:${self.balance}"
    
    def bank_account_info(self):
        return f"Account#:{self.account}, interest Rate:{self.int_rate}, Balance:${self.balance}"
    
    def yield_interest(self):
        if self.balance >= 1:
            self.balance += (self.balance * self.int_rate)
            # return self.balance


account101 = BankAccount(101, 0.01, 100)
account102 = BankAccount(102, 0.01, 200)

print(BankAccount.display_account_info(account101))
print(BankAccount.display_account_info(account102))

account101.deposit(100).deposit(50).deposit(50)
print(BankAccount.display_account_info(account101))

account101.withdraw(100)
print(BankAccount.display_account_info(account101))

account101.yield_interest()
print(BankAccount.display_account_info(account101))

account102.deposit(100).deposit(400)
print(BankAccount.display_account_info(account102))

account102.withdraw(50).withdraw(10).withdraw(20).withdraw(30)
print(BankAccount.display_account_info(account102))

account102.yield_interest()
print(BankAccount.display_account_info(account102))

print(BankAccount.bank_account_info(account101))
print(BankAccount.bank_account_info(account102))

