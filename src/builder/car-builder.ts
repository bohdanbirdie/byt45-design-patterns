import { Builder } from "./builder.interface";
import Car from "./car";

export default class CarBuilder implements Builder<Car> {
  car: Car;

  reset() {
    this.car = new Car();
  }

  setSeats(amount: number) {
    this.car.seats = amount;
  }

  installGPS() {
    this.car.hasGPS = true;
  }

  installComputer() {
    this.car.hasComputer = true;
  }

  setEngineWith(horsePower: number) {
    this.car.engineHorsePower = horsePower;
  }

  getResults(): Car {
    return this.car;
  }
}