import { DateTime } from "ionic-angular";
import { User } from "./User";

export class ChatsItem {
    from: User;
    lastMessage: String;
    lastTime: DateTime
  }