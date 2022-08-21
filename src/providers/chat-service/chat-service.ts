import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogServiceProvider } from '../blog-service/blog-service';
import { Subject} from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { fromEvent } from 'rxjs/observable/fromEvent';

/*
  Generated class for the ChatServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatServiceProvider {
  baseURL: String;

  dataModified: Observable<boolean>;
  private dataModifySubject: Subject<boolean>;

  constructor(public http: HttpClient,
    public blogService: BlogServiceProvider) {
    console.log('Hello ChatServiceProvider Provider');
    this.baseURL = this.blogService.baseURL;
    this.dataModifySubject = new Subject<boolean>();
    this.dataModified = this.dataModifySubject.asObservable();
  }

  private extractData(res: Response): any {
    const body = res;
    return body || { };
  }

  getMessages(userID) {

  }

  allChatsChannel(user) {
    return this.http.get(this.baseURL + "/api/chats/" + user._id).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getMessagesWithOneFriend(user, friendID):Observable<object[]> {
    
    return this.http.get(this.baseURL + "/api/chats/" + user._id + "/" + friendID).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }


  sendMessage(messageItem):Observable<object[]> {
    var userID = messageItem.from._id;
    var friendID = messageItem.to;
    return this.http.post(this.baseURL + "/api/chats/send/", messageItem).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private handleError (error: Response | any) {
    let errMsg : string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
