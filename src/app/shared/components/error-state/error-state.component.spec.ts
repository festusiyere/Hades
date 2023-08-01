import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ErrorStateComponent } from './error-state.component'

describe('ErrorStateComponent', () => {
  let component: ErrorStateComponent
  let fixture: ComponentFixture<ErrorStateComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorStateComponent]
    })
    fixture = TestBed.createComponent(ErrorStateComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should not show message by default', () => {
    const elem = fixture.nativeElement.querySelector('.error--state p')
    expect(elem.textContent).toEqual('')
  })

  it('should render message props', () => {
    let message = 'An error occurred'
    component.message = message
    fixture.detectChanges()
    const elem = fixture.nativeElement.querySelector('.error--state p')
    expect(elem.textContent).toContain(message)
  })
})
