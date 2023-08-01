import { Injectable } from '@angular/core'
import { Article } from '../types/Article'

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  constructor() {}

  getBookmarks(): Article[] {
    return JSON.parse(localStorage.getItem('bookmarks') || '[]')
  }

  addToBookmarks(article: Article): void {
    const bookmarks = this.getBookmarks()
    bookmarks.push(article)
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
  }

  removeFromBookmarks(article: Article): void {
    const bookmarks = this.getBookmarks()
    const filteredBookmarks = bookmarks.filter((bookmark: Article) => bookmark.title !== article.title)
    localStorage.setItem('bookmarks', JSON.stringify(filteredBookmarks))
  }

  isBookmarked(article: Article): boolean {
    const bookmarks = this.getBookmarks()
    return bookmarks.some((bookmark: Article) => bookmark.title === article.title)
  }
}
