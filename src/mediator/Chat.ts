import { Mediator } from './Mediator.interface';
import ChatUser from './ChatUser';
import { ChatEvent } from './ChatUser';

export default class Chat implements Mediator {
  private users: ChatUser[] = [];

  private deliverMessage(event: ChatEvent, sender: ChatUser) {
    if (event.type === "private") {
      this.deliverPrivateMessage(event, sender);
      return;
    }

    if (event.type === "public") {
      this.deliverPublicMessage(event, sender);
    }
  }

  private deliverPrivateMessage(event: ChatEvent, sender: ChatUser) {
    const { receiverName } = event;
    if (receiverName) {
      const receiver = this.users.find(
        chatUser => chatUser.getName() === receiverName
      );
      const message = this.constructMessage(sender, receiver, event);
      receiver.receiveMsg(message);
    }
  }

  private deliverPublicMessage(event: ChatEvent, sender: ChatUser) {
    this.users.forEach(user =>
      user.receiveMsg(this.constructMessage(sender, user, event))
    );
  }

  private constructMessage(sender: ChatUser, receiver: ChatUser, event: ChatEvent) {
    return `${
      event.type
    } message from ${sender.getName()} to ${receiver.getName()}: ${event.msg}`;
  }

  addUserToChat(user: ChatUser) {
    this.users.push(user);
  }

  notify(event: ChatEvent, sender: ChatUser): void {
    this.deliverMessage(event, sender);
  }
}