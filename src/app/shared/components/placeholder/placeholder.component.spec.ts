import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PlaceholderComponent } from './placeholder.component'

describe('PlaceholderComponent', () => {
  let component: PlaceholderComponent
  let fixture: ComponentFixture<PlaceholderComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceholderComponent]
    })
    fixture = TestBed.createComponent(PlaceholderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should not empty by default', () => {
    const elem = fixture.nativeElement.querySelector('.articles')
    expect(elem).toBeFalsy()
  })

  it('should render placeholder', () => {
    component.isArticles = true
    fixture.detectChanges()
    const elem = fixture.nativeElement.querySelector('.articles .p-container')
    expect(elem).toBeTruthy()
  })
})
