import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Article } from '../../types/Article'
import { BookmarkService } from '../../services/bookmark.service'

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent {
  @Input() article!: Article
  @Input() isShowRemove: boolean = false

  @Output() removeArticle = new EventEmitter<Article>()

  number: number = Math.random()

  constructor(private bookmarkService: BookmarkService) {}

  addToBookmarks(evt: MouseEvent, article: Article): void {
    evt.preventDefault()
    this.bookmarkService.addToBookmarks(article)
  }

  removeFromBookmarks(evt: MouseEvent, article: Article): void {
    evt.preventDefault()
    this.removeArticle.emit(article)
  }

  get description() {
    return this.article.description.length > 100 ? this.article.description.slice(0, 100) + '...' : this.article.description
  }

  get isBookmarked(): boolean {
    return this.bookmarkService.isBookmarked(this.article)
  }
}
