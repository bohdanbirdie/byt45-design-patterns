import { Mediator, MediatorEvent } from './Mediator.interface';

export default class Component {
  private mediator: Mediator;

  constructor(mediator: Mediator) {
    this.mediator = mediator;
  }

  protected send(event: MediatorEvent): void {
    this.mediator.notify(event, this);
  }

  receiveMsg(msg: String): void {
    console.log(msg);
  }
}
