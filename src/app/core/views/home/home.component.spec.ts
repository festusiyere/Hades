import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing'
import { of, throwError } from 'rxjs'
import { NO_ERRORS_SCHEMA } from '@angular/core'

import { HomeComponent } from './home.component'
import { StoreService } from './../../../shared/services/store.service'
import { ArticleService } from '../../services/article.service'
import { mockArticles } from './../../../core/services/data/mock'
import { Component } from '@angular/core'

@Component({ selector: 'app-empty-state', template: '' })
class EmptyStateStubComponent {
  isHome: boolean = true
}

describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>
  let mockArticleService: jasmine.SpyObj<ArticleService>
  let mockStoreService: jasmine.SpyObj<StoreService>

  beforeEach(async () => {
    const articleServiceSpy = jasmine.createSpyObj('ArticleService', ['getArticles'])
    const storeServiceSpy = jasmine.createSpyObj('StoreService', ['getArticles', 'setArticles'])

    await TestBed.configureTestingModule({
      declarations: [HomeComponent, EmptyStateStubComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: ArticleService, useValue: articleServiceSpy },
        { provide: StoreService, useValue: storeServiceSpy }
      ]
    }).compileComponents()

    mockArticleService = TestBed.inject(ArticleService) as jasmine.SpyObj<ArticleService>
    mockStoreService = TestBed.inject(StoreService) as jasmine.SpyObj<StoreService>

    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should get articles from the store if available', fakeAsync(() => {
    mockStoreService.getArticles.and.returnValue(of(mockArticles))
    component.ngOnInit()

    fixture.detectChanges()
    tick()

    expect(component.articles).toEqual(mockArticles)
    expect(component.isLoading).toBeFalse()
    expect(component.error).toBe('')
    expect(mockArticleService.getArticles).not.toHaveBeenCalled()
  }))

  it('should fetch articles from the ArticleService if not available in the store', fakeAsync(() => {
    mockArticleService.getArticles.and.returnValue(of(null)).and.returnValues(of(mockArticles))
    component.ngOnInit()

    fixture.detectChanges()
    tick()

    expect(component.articles).toEqual([])

    component.getArticles()

    fixture.detectChanges()

    expect(mockArticleService.getArticles).toHaveBeenCalled()
    expect(mockStoreService.setArticles).toHaveBeenCalledWith(mockArticles)
  }))

  afterEach(() => {
    if (component.subscription$) {
      component.subscription$.unsubscribe()
    }
  })
})
