import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { NewsItemComponent } from './news-item.component'
import { mockArticles } from 'src/app/core/services/data/mock'
import { BookmarkService } from '../../services/bookmark.service'
import { Article } from '../../types/Article'

describe('NewsItemComponent', () => {
  let component: NewsItemComponent
  let fixture: ComponentFixture<NewsItemComponent>
  let mockBookmarkService: jasmine.SpyObj<BookmarkService>

  beforeEach(() => {
    const bookmarkServiceSpy = jasmine.createSpyObj('BookmarkService', ['addToBookmarks', 'isBookmarked'])

    TestBed.configureTestingModule({
      declarations: [NewsItemComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: BookmarkService, useValue: bookmarkServiceSpy }]
    })

    mockBookmarkService = TestBed.inject(BookmarkService) as jasmine.SpyObj<BookmarkService>

    fixture = TestBed.createComponent(NewsItemComponent)
    component = fixture.componentInstance
    component.article = mockArticles[0]
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should display title', () => {
    const h2 = fixture.nativeElement.querySelector('h2')
    expect(h2.textContent).toContain(component.article.title)
  })

  it('should display description', () => {
    const p = fixture.nativeElement.querySelector('.description p')
    expect(p.textContent).toContain(component.description)
  })

  it('should display author', () => {
    const elem = fixture.nativeElement.querySelector('.author')
    expect(elem.textContent).toContain(component.article.author)
  })

  it('should add article to bookmarks on addToBookmarks', () => {
    const mockArticle: Article = mockArticles[0]
    component.article = mockArticle

    fixture.detectChanges()
    const addToBookmarksButton: HTMLButtonElement = fixture.nativeElement.querySelector('.bookmark a')
    addToBookmarksButton.click()
    fixture.whenStable().then(() => {
      expect(mockBookmarkService.addToBookmarks).toHaveBeenCalledWith(mockArticle)
    })
  })

  it('should emit removeArticle event on removeFromBookmarks', () => {
    const mockArticle: Article = mockArticles[0]
    component.article = mockArticle
    component.isShowRemove = true

    fixture.detectChanges()

    mockBookmarkService.isBookmarked.and.returnValue(true)
    fixture.detectChanges()

    const removeFromBookmarksButton: HTMLButtonElement = fixture.nativeElement.querySelector('.bookmark a')
    const removeArticleSpy = spyOn(component.removeArticle, 'emit')
    removeFromBookmarksButton.click()
    fixture.whenStable().then(() => {
      expect(removeArticleSpy).toHaveBeenCalledWith(mockArticle)
    })
  })

  it('should check if article is bookmarked', () => {
    const mockArticle: Article = mockArticles[0]
    component.article = mockArticle
    fixture.detectChanges()
    mockBookmarkService.isBookmarked.and.returnValue(true)
    expect(component.isBookmarked).toBeTrue()
    mockBookmarkService.isBookmarked.and.returnValue(false)
    expect(component.isBookmarked).toBeFalse()
  })
})
