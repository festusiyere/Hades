import { ComponentFixture, TestBed } from '@angular/core/testing'

import { EmptyStateComponent } from './empty-state.component'

describe('EmptyStateComponent', () => {
  let component: EmptyStateComponent
  let fixture: ComponentFixture<EmptyStateComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyStateComponent]
    })
    fixture = TestBed.createComponent(EmptyStateComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should not show message', () => {
    const elem = fixture.nativeElement.querySelector('.empty--state p')
    expect(elem).toBeFalsy()
  })

  it('should show message for home prop', () => {
    component.isHome = true
    fixture.detectChanges()
    const elem = fixture.nativeElement.querySelector('.empty--state p')
    expect(elem.textContent).toContain("There's no article at the moment")
  })

  it('should show message for Bookmark prop', () => {
    component.isBookmarks = true
    fixture.detectChanges()
    const elem = fixture.nativeElement.querySelector('.empty--state p')
    expect(elem.textContent).toContain("You've not bookmarked any article yet")
  })
})
