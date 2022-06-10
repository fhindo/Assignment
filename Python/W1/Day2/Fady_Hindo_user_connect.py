class BankAccount:

    def __init__(self, account, int_rate, balance, bank_user):
        self.account = account
        self.int_rate = int_rate
        self.balance = balance
        self.bank_user = bank_user
        self.bank_user.make_deposit(self)
        self.bank_user.make_withdrawal(self)
        # self.bank_user.transfer_money(self)
    
    def __str__(self):
        return f"{self.bank_user}"

class User:
    bank_name = "Banking 1o1"

    def __init__(self, name, email):
        self.name = name
        self.email = email

    def __str__(self):
        return f"{self.name}"
    
    def make_deposit(self, amount):
        self.balance += amount

    def make_withdrawal(self, amount):
        self.balance -= amount
    
    def disply_user_balance (self):
        return f"{self.name}, Balance:{self.balance}$"

    def transfer_money(self, other_user, amount):
        self.balance -= amount
        other_user.balance += amount


    
user1 = User("Alex John", "email1@e.com")
user2 = User("Max Maxi", "max@emc.com")
user3 = User("Sam Smith", "sam@python.com")

account101 = BankAccount(101, 0.01, 100, user1)
account102 = BankAccount(102, 0.01, 200, user2)
account103 = BankAccount(103, 0.01, 300, user3)

print(account101)
print(account101.balance)

user1.make_deposit(111)

print(user1.disply_user_balance)

# print(user1.name)
# print(user2.name)
# print(user3.name)

# user1.make_deposit(100)
# user1.make_deposit(200)
# user1.make_deposit(350)

# print("\n after user1 deposit 3 times")
# print(User.disply_user_balance(user1))

# print("\n after user1 withdrawal")
# user1.make_withdrawal(50)
# print(User.disply_user_balance(user1))

# print("\n after user2 deposit 2 times")
# user2.make_deposit(400)
# user2.make_deposit(330)
# print(User.disply_user_balance(user2))

# print("\n after user2 withdrawal 2 times")
# user2.make_withdrawal(130)
# user2.make_withdrawal(50)
# print(User.disply_user_balance(user2))

# print("\n after user3 deposit 1 times")
# user3.make_deposit(1000)
# print(User.disply_user_balance(user3))

# print("\n after user3 withdrawal 3 times")
# user3.make_withdrawal(50)
# user3.make_withdrawal(30)
# user3.make_withdrawal(30)
# print(User.disply_user_balance(user3))

# print("\n user 1 transfer to user 2")
# user1.transfer_money(user3, 400)
# print(User.disply_user_balance(user1))
# print(User.disply_user_balance(user3))




