import { DateTime } from "ionic-angular";

export class BlogItem {
    userID: Number;
    title?: String;
    dateUpdated: DateTime;
    content?: String;
    likes?: Number;
    file?: File;

  }