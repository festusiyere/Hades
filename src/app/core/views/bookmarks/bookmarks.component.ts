import { Component, OnInit } from '@angular/core'
import { BookmarkService } from '../../services/bookmark.service'
import { Article } from '../../types/Article'

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {
  articles: Article[] = []

  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit(): void {
    this.articles = this.bookmarkService.getBookmarks()
  }

  removeItem(article: Article): void {
    this.bookmarkService.removeFromBookmarks(article)
    this.articles = this.bookmarkService.getBookmarks()
  }
}
