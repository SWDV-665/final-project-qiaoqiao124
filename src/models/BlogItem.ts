import { DateTime } from "ionic-angular";

export class BlogItem {
    authorID: String;
    title?: String;
    dateUpdated: DateTime;
    content?: String;
    likes?: Number;
    file?: File;

  }