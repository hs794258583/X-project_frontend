import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Story } from '../../model/story.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BookService {
  private _books: Story[] = [];
  private _errorMessage: string;
  private _baseUrl: string = 'http://api.xtale.net/api/stories';

  constructor(private _http: Http,
              private _router: Router) { }

getBooks(){
  return this._http.get(this._baseUrl)
                     .map((res: Response) => res.json())
                     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}

getBook(Id: number){
    const url = `${this._baseUrl}/${Id}`;
        return this._http.get(url)
                        .map((res: Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}
//Create Review
addBook(book: Story){
  const body = JSON.stringify(book);
  const headers = new Headers({
    'Content-Type' : 'application/json'
  });
  console.log(body);
  return this._http.post(this._baseUrl, body, {headers: headers})
                    .map((res: Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
                    .subscribe(
                      book => this._books.push(book),
                      error => this._errorMessage = <any>error
                    )

}
//Update Review
updateBook(Id:number): Observable<Story[]>{
          return this._http.delete(`${this._baseUrl}/${Id}`)
                    .map((res: Response) => res.json())
                   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}
//Remove Review
removeReview(){

}

navigateBack(){
 this._router.navigate(['']);
}


}


