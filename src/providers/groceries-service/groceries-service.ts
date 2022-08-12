import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the GroceriesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroceriesServiceProvider {
  // baseURL = "http://localhost:8080";
  baseURL = "https://groceries-server-q.herokuapp.com";

  items = [];
  dataModified: Observable<boolean>;
  private dataModifySubject: Subject<boolean>;

  constructor(private http: HttpClient) {
    console.log('Hello GroceriesServiceProvider Provider');
    this.dataModifySubject = new Subject<boolean>();
    this.dataModified = this.dataModifySubject.asObservable();
  }

  private extractData(res: Response): any {
    const body = res;
    return body || { };
  }

  getItems(): Observable<object[]> {
    console.log('Hello getItems');
    return this.http.get(this.baseURL + "/api/groceries").pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  removeItem(index){
    this.http.delete(this.baseURL + "/api/groceries/" + index).subscribe(res => {
      this.items = <any>res;
      this.dataModifySubject.next(true);
    });
  }

  addItem(data){
    this.http.post(this.baseURL + "/api/groceries", data).subscribe(res => {
      this.items = <any>res;
      this.dataModifySubject.next(true);
    });
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
