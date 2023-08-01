import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { CustomErrorComponent } from './custom-error.component'

describe('CustomErrorComponent', () => {
  let component: CustomErrorComponent
  let fixture: ComponentFixture<CustomErrorComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CustomErrorComponent]
    })
    fixture = TestBed.createComponent(CustomErrorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should contain error message', () => {
    const elem = fixture.nativeElement.querySelector('h4')
    expect(elem.textContent).toContain('You seem lost!')
  })
})
