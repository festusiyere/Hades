import { TestBed } from '@angular/core/testing'

import { StoreService } from './store.service'
import { mockArticles } from './../../core/services/data/mock'

describe('StoreService', () => {
  let service: StoreService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(StoreService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should set and get articles', () => {
    service.setArticles(mockArticles)

    service.getArticles().subscribe(articles => {
      expect(articles).toEqual(mockArticles)
    })
  })
})
