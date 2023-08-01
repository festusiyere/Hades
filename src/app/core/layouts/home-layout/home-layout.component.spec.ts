import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { HomeLayoutComponent } from './home-layout.component'
import { Component } from '@angular/core'

@Component({ selector: 'app-nav-bar', template: '' })
class NavBarStubComponent {}

describe('HomeLayoutComponent', () => {
  let component: HomeLayoutComponent
  let fixture: ComponentFixture<HomeLayoutComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeLayoutComponent, NavBarStubComponent],
      imports: [RouterTestingModule]
    })
    fixture = TestBed.createComponent(HomeLayoutComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
