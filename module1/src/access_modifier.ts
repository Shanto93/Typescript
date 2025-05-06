{
  //Access Modifier in TypeScript
  class BankAccount {
    readonly id: number;
    protected name: string;
    private _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    addDeposite(amount: number) {
      this._balance = this._balance + amount;
    }
  }

  class StudentAccunt extends BankAccount {
    test() {
      this.name = "test";  
    }
  }

  const myAccount = new BankAccount(100, "Shanta Islam", 10000);
  const student1 = new StudentAccunt(101, "student1", 2000);
  myAccount.addDeposite(500);
}
