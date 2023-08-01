import { Injectable } from '@angular/core'
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { environment } from 'src/assets/environments/environment'
import { catchError, pluck } from 'rxjs/operators'
import { Article } from '../types/Article'
import { Observable, throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  BASE_URL: string = environment.API_HOST
  API_KEY: string = environment.API_KEY

  constructor(private http: HttpClient) {}

  getArticles(): Observable<any> {
    const params = new HttpParams().set('q', 'food').set('apiKey', this.API_KEY)
    return this.http.get<Article[]>(`${this.BASE_URL}everything`, { params }).pipe(pluck('articles'), catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      return throwError(() => new Error('Please check your internet connection.'))
    } else {
      return throwError(() => new Error('Unable to get articles right now.'))
    }
  }
}
