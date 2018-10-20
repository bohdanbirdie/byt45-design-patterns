import Component from './Component';

export interface Mediator {
  notify(event: MediatorEvent, sender: Component): void;
}

export interface MediatorEvent {
  msg: String;
  type: String
}