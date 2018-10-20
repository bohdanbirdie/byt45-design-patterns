import Originator from "./originator";

export default class TextEditor extends Originator<String> {
  constructor() {
    super();
    this.state = "";
  }

  public getText(): String {
    return this.state;
  }

  public appendText(text: string) {
    this.setState(this.state + text);
  }

  public appendNewLine() {
    this.setState(this.state + "\n");
  }

  public bold(text: string) {
    return `<b>${text}</b>`;
  }

  public italic(text: string) {
    return `<i>${text}</i>`;
  }
}
