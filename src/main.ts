import Chat from "./mediator/Chat";
import ChatUser from "./mediator/ChatUser";
import Caretaker from "./memento/careTaker";
import TextEditor from "./memento/textEditor";
import BuilderExample from "./builder/builder-example";

const runMediatorExample = () => {
  console.log("=============== Running mediator example ===============\n");
  const chat = new Chat();
  const john = new ChatUser(chat, "John");
  const ron = new ChatUser(chat, "Ron");
  const harry = new ChatUser(chat, "Harry");

  john.sendChatMessage("Hello", "public");
  ron.sendChatMessage("Hello, John!", "private", "John");
  harry.sendChatMessage("Hello, John!", "private", "Harry");
  console.log("=============== End of mediator example ===============\n");
};

const runMementoExample = () => {
  console.log("=============== Running memento example ===============\n");
  const caretaker = new Caretaker<String>();
  const textEditor = new TextEditor();

  textEditor.appendText(textEditor.bold('Hello'));
  textEditor.appendText(textEditor.italic(' world!'));

  caretaker.addMemento(textEditor.save());

  textEditor.appendNewLine();
  textEditor.appendText('How r u?');

  console.log(`Current state:\n\n${textEditor.getText()}\n`);

  textEditor.restore(caretaker.getLatest());

  console.log(`Current state:\n\n${textEditor.getText()}\n`);

  console.log("=============== End of memento example ===============\n");
};

const runBuilderExample = () => {
  console.log("=============== Running builder example ===============\n");
  const app = new BuilderExample();
  app.makeCar();
  console.log("=============== End of builder example ===============\n");
};

const main = () => {
  runMediatorExample();
  runMementoExample();
  runBuilderExample();
};
main();
