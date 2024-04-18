class Account {
  private static _members: number = 0;
  username?: string;
  constructor(
    public readonly id: number,
    private _owner: string,
    private _balance: number
  ) {}

  static getMembers(): number {
    return Account._members;
  }

  public get owner(): string {
    return this._owner;
  }

  public set owner(newName: string) {
    if (newName.length < 3) {
      throw new Error("new name must be more than 3 characters");
    }
    this._owner = newName;
  }

  getBalance(): number {
    // more logic
    return this._balance;
  }

  deposit(amount: number) {
    if (amount <= 0) {
      throw new Error("amount cannot be less than one");
    }
    this._balance += amount;
  }

  withdraw(amount: number) {
    if (this._balance < amount) {
      throw new Error("You don't have enough money");
    }

    this._balance -= amount;
    return amount;
  }
}
