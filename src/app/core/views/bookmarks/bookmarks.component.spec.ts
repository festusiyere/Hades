import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BookmarksComponent } from './bookmarks.component'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { mockArticles } from './../../../core/services/data/mock'
import { BookmarkService } from '../../services/bookmark.service'
import { Article } from '../../types/Article'

describe('BookmarksComponent', () => {
  let component: BookmarksComponent
  let fixture: ComponentFixture<BookmarksComponent>
  let mockBookmarkService: jasmine.SpyObj<BookmarkService>

  beforeEach(() => {
    const bookmarkServiceSpy = jasmine.createSpyObj('BookmarkService', ['getBookmarks', 'removeFromBookmarks'])

    TestBed.configureTestingModule({
      declarations: [BookmarksComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: BookmarkService, useValue: bookmarkServiceSpy }]
    })
    mockBookmarkService = TestBed.inject(BookmarkService) as jasmine.SpyObj<BookmarkService>

    fixture = TestBed.createComponent(BookmarksComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    fixture.detectChanges()
    expect(component).toBeTruthy()
  })

  it('should get bookmarks on ngOnInit', () => {
    mockBookmarkService.getBookmarks.and.returnValue(mockArticles)

    fixture.detectChanges()

    expect(mockBookmarkService.getBookmarks).toHaveBeenCalled()
  })

  it('should remove item from bookmarks', () => {
    const removedArticle: Article = mockArticles[0]

    mockBookmarkService.getBookmarks.and.returnValue(mockArticles)

    fixture.detectChanges()

    component.removeItem(removedArticle)

    expect(mockBookmarkService.removeFromBookmarks).toHaveBeenCalledWith(removedArticle)
  })
})
