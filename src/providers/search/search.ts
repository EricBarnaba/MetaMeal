import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {HttpErrorResponse} from '@angular/common/http';
import{catchError} from 'rxjs/operators';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';

/*
  Generated class for the SearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class SearchProvider {
  getUrl = 'https://jsonplaceholder.typicode.com/restaurants';
  postUrl = 'https://jsonplaceholder.typicode.com/search';
  private static lastSearch: number;

  constructor(private http: HttpClient) {
    //console.log('Hello SearchProvider Provider');
  }

  getData(){
    const req = new HttpRequest('GET', this.getUrl, {
      reportProgress: true
    })
    return this.http.request(req);
  }

  postSearch(location: string, cuisine: string, radius: number) {
    //let json = new SearchObject(location,cuisine,radius);
    let id: number = SearchProvider.lastSearch;
    SearchProvider.lastSearch++;
    return this.http.post(this.postUrl, {id,location,cuisine,radius});
  }

  updateSearch(id:number, location: string, cuisine: string, radius: number){
    return this.http.put(this.postUrl, {id,location,cuisine,radius});
  }

   clearSearch() {
     return this.http.delete(this.postUrl)
   }

  // private handleError(error: HttpErrorResponse) {
  //   if(error.error instanceof ErrorEvent) {
  //     console.error('Something weird is going on: ', error.error.message);
  //   }
  //   else{
  //     console.error(`Server returned code ${error.status},` + `body was: ${error.error}`);
  //   }
  //   return new ErrorObservable('Something bad happened');

  // }

}


