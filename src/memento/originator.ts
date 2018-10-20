import Memento from "./memento";

export default abstract class Originator<T> {
  protected state: T;

  public setState(state: T): void {
      this.state = state;
  }

  public save(): Memento<T> {
      return new Memento(this.state);
  }
  
  public restore(m: Memento<T>): void {
      this.state = m.getState();
  }
}