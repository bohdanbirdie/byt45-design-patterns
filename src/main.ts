import Chat from './mediator/Chat';
import ChatUser from './mediator/ChatUser';




const main = () => {
  const chat = new Chat();

  const john = new ChatUser(chat, "John");
  const ron = new ChatUser(chat, "Ron");
  const harry = new ChatUser(chat, "Harry");

  john.sendChatMessage("Hello", "public");
  ron.sendChatMessage("Hello, John!", "private", "John");
  harry.sendChatMessage("Hello, John!", "private", "Harry");
};
main();

