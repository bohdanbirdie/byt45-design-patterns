import CarBuilder from "./car-builder";
import CarManualBuilder from "./car-manual-builder";

export default class Director {
  constructSportCar(builder: CarBuilder | CarManualBuilder): void {
    builder.reset();
    builder.setSeats(2);
    builder.installComputer();
    builder.installGPS();
    builder.setEngineWith(400);
  }
}
