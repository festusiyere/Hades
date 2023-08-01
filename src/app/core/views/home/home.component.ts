import { Component, OnDestroy, OnInit } from '@angular/core'
import { Article } from '../../types/Article'
import { ArticleService } from '../../services/article.service'
import { StoreService } from 'src/app/shared/services/store.service'
import { Subscription } from 'rxjs/internal/Subscription'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy, OnInit {
  articles: Article[] = []
  isLoading: boolean = false
  error: string = ''
  subscription$: Subscription = new Subscription()

  constructor(private articleService: ArticleService, private storeService: StoreService) {}

  ngOnInit(): void {
    this.subscription$ = this.storeService.getArticles()?.subscribe((data: any) => {
      if (data) {
        this.articles = data
        return
      } else {
        this.getArticles()
      }
    })
  }

  getArticles(): void {
    this.isLoading = true
    this.articleService.getArticles().subscribe(
      (data: Article[]) => {
        this.articles = data
        this.isLoading = false
        this.storeService.setArticles(data)
      },
      error => {
        this.error = error.message
      }
    )
  }

  ngOnDestroy(): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe()
    }
  }
}
