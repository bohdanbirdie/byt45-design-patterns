import Director from "./director";
import Car from "./car";
import CarManual from "./car-manual";
import CarBuilder from "./car-builder";
import CarManualBuilder from "./car-manual-builder";

export default class BuilderExample {
  private director: Director;
  private carBuilder: CarBuilder;
  private carManualBuilder: CarManualBuilder;
  private car: Car;
  private carManual: CarManual;

  makeCar(): void {
    this.director = new Director();

    this.carBuilder = new CarBuilder();
    this.director.constructSportCar(this.carBuilder);
    this.car = this.carBuilder.getResults();

    this.carManualBuilder = new CarManualBuilder();
    this.director.constructSportCar(this.carManualBuilder);
    this.carManual = this.carManualBuilder.getResults();
    console.log("Car:\n", this.car);
    console.log("Car manual:\n" + this.carManual.detailsDescription);
  }
}
