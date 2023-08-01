import { Component, OnInit } from '@angular/core'
import { Article } from '../../types/Article'
import { ArticleService } from '../../services/article.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: Article[] = []
  isLoading: boolean = false
  error: string = ''

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.getArticles()
  }

  getArticles() {
    this.isLoading = true
    this.articleService.getArticles().subscribe(
      (data: Article[]) => {
        this.articles = data
        this.isLoading = false
      },
      error => {
        this.error = error.message
      }
    )
  }
}
