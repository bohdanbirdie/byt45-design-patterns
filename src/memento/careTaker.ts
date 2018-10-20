import Memento from "./memento";

export default class Caretaker<T> {
  private mementos: Memento<T>[] = [];

  public addMemento(m: Memento<T>): void {
    this.mementos.push(m);
  }

  public getMementoByIndex(index: number): Memento<T> {
    const target = this.mementos[index];
    if (target) {
      return target;
    }
    return null;
  }

  public getLatest(): Memento<T> {
    if (this.mementos.length) {
      return this.mementos[this.mementos.length - 1];
    }
    return null;
  }
}
