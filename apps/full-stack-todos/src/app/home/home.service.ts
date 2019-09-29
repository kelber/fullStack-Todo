import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
// lib reused :)
import { Todo } from './../../../../../libs/api-interfaces/src/lib/todo';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '/api/todo';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }


  ///////////////////////////////////////////////////////////////////
  // Exemplos do https://www.djamware.com/post/5d2898430707cc5968d9d57f/build-a-web-app-using-nestjs-fastify-mongodb-and-angular-8
  ///////////////////////////////////////////////////////////////////

  todos: Observable<Todo[]>;

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(apiUrl)
      .pipe(
        tap(todo => console.log('fetched', todo)),
        catchError(this.handleError('get errors in todo', []))
        )
  }

  addTodo(todo): Observable<Todo> {
    return this.http.post<Todo>(apiUrl, todo, httpOptions).pipe(
      // this.todos.push(todo.value);
        
          tap((todo: Todo) => console.log(`added article w/ id=${todo._id} e TODO => ${todo}`)),
          catchError(this.handleError<Todo>('Erro ao adicionar Todo'))
        );
  }


  ///////////////////////////////////////////////////////////////////
  // Metodos CRUD
  ///////////////////////////////////////////////////////////////////



  // getArticles(): Observable<Article[]> {
  //   return this.http.get<Article[]>(apiUrl)
  //     .pipe(
  //       tap(article => console.log('fetched articles')),
  //       catchError(this.handleError('getArticles', []))
  //     );
  // }

  // getArticle(id: number): Observable<Article> {
  //   const url = `${apiUrl}/${id}`;
  //   return this.http.get<Article>(url).pipe(
  //     tap(_ => console.log(`fetched article id=${id}`)),
  //     catchError(this.handleError<Article>(`getArticle id=${id}`))
  //   );
  // }

  // addArticle(article: Article): Observable<Article> {
  //   return this.http.post<Article>(apiUrl, article, httpOptions).pipe(
  //     tap((art: Article) => console.log(`added article w/ id=${art._id}`)),
  //     catchError(this.handleError<Article>('addArticle'))
  //   );
  // }

  // updateArticle(id: any, article: Article): Observable<any> {
  //   const url = `${apiUrl}/${id}`;
  //   return this.http.put(url, article, httpOptions).pipe(
  //     tap(_ => console.log(`updated article id=${id}`)),
  //     catchError(this.handleError<any>('updateArticle'))
  //   );
  // }

  // deleteArticle(id: any): Observable<Article> {
  //   const url = `${apiUrl}/${id}`;
  //   return this.http.delete<Article>(url, httpOptions).pipe(
  //     tap(_ => console.log(`deleted article id=${id}`)),
  //     catchError(this.handleError<Article>('deleteArticle'))
  //   );
  // }



  ///////////////////////////////////////////////////////////////////
  // handleErrors
  ///////////////////////////////////////////////////////////////////

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error('erro back', error); // log to console instead
      // console.error(error.statusText); // log to console instead
      return of(result as T);
    };
  }



}
