import { Builder } from "./builder.interface";
import CarManual from "./car-manual";

export default class CarManualBuilder implements Builder<CarManual> {
  carManual: CarManual;

  reset(): void {
    this.carManual = new CarManual();
  }

  setSeats(amount: number): void {
    this.carManual.detailsDescription += amount + " wheels were installed.";
  }

  installGPS() {
    this.carManual.detailsDescription += " GPS was installed.";
  }

  installComputer() {
    this.carManual.detailsDescription += " Computer was installed.";
  }

  setEngineWith(horsePower: number) {
    this.carManual.detailsDescription += ` Engine has ${horsePower} horse power.`;
  }

  getResults(): CarManual {
    return this.carManual;
  }
}
