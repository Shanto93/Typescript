{
  //Problem 4
  class Vehicle {
    private _make: string;
    private _year: number;
    constructor(_make: string, _year: number) {
      this._make = _make;
      this._year = _year;
    }
    getInfo(): string {
      return `Make: ${this._make}, Year: ${this._year}`;
    }
  }

  class Car extends Vehicle {
    private _model: string;
    constructor(_make: string, _year: number, _model: string) {
      super(_make, _year);
      this._model = _model;
    }
    getModel(): string {
      return `Model: ${this._model}`;
    }
  }
  const myCar = new Car("Toyota", 2020, "Corolla");
  const info = myCar.getInfo();
  const model = myCar.getModel();
  console.log(info);
  console.log(model);
}
