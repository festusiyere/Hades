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
    const errorMessageElem: HTMLElement = fixture.nativeElement
    const div = errorMessageElem.querySelector('empty--state')!
    expect(div).toBeFalsy()
  })
})
