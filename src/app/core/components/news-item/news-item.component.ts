import { Component, Input } from '@angular/core'
import { Article } from '../../types/Article'

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent {
  @Input() article!: Article
  number: number = Math.random()

  get description() {
    return this.article.description.length > 100 ? this.article.description.slice(0, 100) + '...' : this.article.description
  }
}
