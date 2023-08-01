import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { NavBarComponent } from './nav-bar.component'

describe('NavBarComponent', () => {
  let component: NavBarComponent
  let fixture: ComponentFixture<NavBarComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NavBarComponent]
    })
    fixture = TestBed.createComponent(NavBarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render logo', () => {
    const elem = fixture.nativeElement.querySelector('.navbar .logo')
    expect(elem).toBeTruthy()
  })

  it('should show bookmark link', () => {
    const elem = fixture.nativeElement.querySelector('.links a')
    expect(elem).toBeTruthy()
  })
})
