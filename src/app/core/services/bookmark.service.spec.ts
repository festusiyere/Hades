import { TestBed } from '@angular/core/testing'

import { BookmarkService } from './bookmark.service'
import { mockArticles } from './../../core/services/data/mock'
import { Article } from '../types/Article'

describe('BookmarkService', () => {
  let service: BookmarkService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(BookmarkService)
    localStorage.clear()
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should return empty array when bookmarks are not present', () => {
    const bookmarks = service.getBookmarks()
    expect(bookmarks).toEqual([])
  })

  it('should add article to bookmarks', () => {
    const mockArticle: Article = mockArticles[0]
    service.addToBookmarks(mockArticle)

    const bookmarks = service.getBookmarks()
    expect(bookmarks).toEqual([mockArticle])
  })

  it('should remove article from bookmarks', () => {
    const mockArticle1: Article = mockArticles[0]
    const mockArticle2: Article = mockArticles[1]

    service.addToBookmarks(mockArticle1)
    service.addToBookmarks(mockArticle2)

    service.removeFromBookmarks(mockArticle1)

    const bookmarks = service.getBookmarks()
    expect(bookmarks).toEqual([mockArticle2])
  })

  it('should check if article is bookmarked', () => {
    const mockArticle1: Article = mockArticles[0]
    const mockArticle2: Article = mockArticles[1]

    service.addToBookmarks(mockArticle1)

    const isBookmarked1 = service.isBookmarked(mockArticle1)
    const isBookmarked2 = service.isBookmarked(mockArticle2)

    expect(isBookmarked1).toBeTrue()
    expect(isBookmarked2).toBeFalse()
  })

  it('should return false if article is not bookmarked', () => {
    const mockArticle: Article = mockArticles[0]

    const isBookmarked = service.isBookmarked(mockArticle)

    expect(isBookmarked).toBeFalse()
  })
})
