class User:

    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(.01, 0)
    
    def make_deposit(self, amount):
        # self.account.balance += amount #not to do that we should alwas try to use the functions
        self.account.deposit(amount)

    def make_withdrawal(self, amount):
        self.account.withdraw(amount)
    
    def disply_user_balance (self):
        self.account.display_account_info(self)
    
    def transfer(self, other_user, amount):
        self.account.transfer_money(other_user, amount)

class BankAccount:

    def __init__(self, int_rate, balance = 0):
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
    
    def transfer_money(self, other_user, amount):
        self.balance -= amount
        other_user.balance += amount
    
    def display_account_info(self):
        return f"Balance:${self.balance}"
    
    # def bank_account_info(self):
    #     return f"interest Rate:{self.int_rate}, Balance:${self.balance}"
    
    def yield_interest(self):
        if self.balance >= 1:
            self.balance += (self.balance * self.int_rate)
            # return self.balance

user1 = User("Sam", "sam@mail.com")
user2 = User("Alex", "Alex@mail.com")
user3 = User("Max", "Max@mail.com")

user1.make_deposit(100)
user2.make_deposit(200)
user3.make_deposit(300)

print(user1.account.display_account_info())
print(user2.account.display_account_info())
print(user3.account.display_account_info())

user1.make_withdrawal(50)
user2.make_withdrawal(50)
user3.make_withdrawal(50)

print(user1.account.display_account_info())
print(user2.account.display_account_info())
print(user3.account.display_account_info())


user1.transfer(user2.account, 40)

print(user1.account.display_account_info())
print(user2.account.display_account_info())
