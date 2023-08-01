import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { environment } from 'src/assets/environments/environment'

import { ArticleService } from './article.service'
import { mockArticles } from './data/mock'

describe('ArticleService', () => {
  let articleService: ArticleService
  let mockData = mockArticles

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArticleService]
    })
    articleService = TestBed.inject(ArticleService)
  })

  it('should be created', () => {
    expect(articleService).toBeTruthy()
  })

  // it('should return articles', () => {

  //   articleService.getArticles().subscribe((articles) => {
  //     expect(articles[0]).toEqual(mockData);
  //   });
  //   const request = httpTestingController.expectOne('app/contacts');
  //   request.flush([mockContact]);
  // })
})
