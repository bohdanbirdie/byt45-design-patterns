export interface Builder<T> {
  reset(): void;

  setSeats(amount: number): void;

  installGPS(): void;

  installComputer(): void;

  setEngineWith(horsePower: number): void;

  getResults(): T;
}
