import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'
import { Article } from 'src/app/core/types/Article'

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private articlesStore = new BehaviorSubject<Article[] | null>(null)

  constructor() {}

  setArticles(value: Article[]) {
    this.articlesStore.next(value)
  }

  getArticles() {
    return this.articlesStore.asObservable()
  }
}
