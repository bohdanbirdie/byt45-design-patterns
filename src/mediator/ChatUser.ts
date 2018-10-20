import { MediatorEvent } from './Mediator.interface';
import Component from './Component';
import Chat from './Chat';

type EventType = "public" | "private";

export interface ChatEvent extends MediatorEvent {
  msg: String;
  type: EventType;
  receiverName?: String;
}

export default class ChatUser extends Component {
  private name: String;

  constructor(mediator: Chat, name: String) {
    super(mediator);
    this.name = name;
    mediator.addUserToChat(this);
  }

  private constructEvent(
    msg: String,
    type: EventType,
    receiverName?: String
  ): ChatEvent {
    return { msg, type, receiverName };
  }

  public getName() {
    return this.name;
  }
  sendChatMessage(msg: String, type: EventType, receiverName?: String): void {
    const event = this.constructEvent(msg, type, receiverName);
    super.send(event);
  }
}