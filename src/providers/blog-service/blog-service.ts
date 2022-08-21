import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { BlogItem } from '../../models/BlogItem';


/*
  Generated class for the BlogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BlogServiceProvider {
  //baseURL = "http://localhost:8080";
  baseURL = "https://pet-lovers-server.herokuapp.com";
  newBlog: {}

  items = [];
  dataModified: Observable<boolean>;
  private dataModifySubject: Subject<boolean>;

  constructor(public http: HttpClient) {
    console.log('Hello BlogServiceProvider Provider');
    this.dataModifySubject = new Subject<boolean>();
    this.dataModified = this.dataModifySubject.asObservable();
  }

  

 

  private extractData(res: Response): any {
    const body = res;
    return body || { };
  }

  getBlogs(): Observable<object[]> {
    
    return this.http.get(this.baseURL + "/api/blogs").pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getBlogsOfOneUser(user, authorID):Observable<object[]> {
    
    return this.http.get(this.baseURL + "/api/blogs/authorID").pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }



  // getItems(): Observable<object[]> {
  //   console.log('Hello getItems');
  //   return this.http.get(this.baseURL + "/api/groceries").pipe(
  //     map(this.extractData),
  //     catchError(this.handleError)
  //   );
  // }

  removeItem(index){
    this.http.delete(this.baseURL + "/api/groceries/" + index).subscribe(res => {
      this.items = <any>res;
      this.dataModifySubject.next(true);
    });
  }

 
  

  

  postBlog(blogItem, user){
    this.newBlog = {
      user: user,
      blogItem: blogItem
    }
    console.log(this.newBlog);
    return this.http.post<any>(this.baseURL + "/api/blogs/create", this.newBlog);

    // this.http.post(this.baseURL + "/api/blogs", blogItem).subscribe(res => {
    //   this.items = <any>res;
    //   this.dataModifySubject.next(true);
    // });
  }

  editItem(item, index) {
    console.info(index)
    this.http.put(this.baseURL + "/api/groceries/" + index, item).subscribe(res => {
      this.items = <any>res;
      this.dataModifySubject.next(true);
    });
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
