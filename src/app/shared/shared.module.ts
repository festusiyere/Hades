import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { RouterModule } from '@angular/router'
import { PlaceholderComponent } from './components/placeholder/placeholder.component'
import { HttpClientModule } from '@angular/common/http'
import { EmptyStateComponent } from './components/empty-state/empty-state.component'
import { ErrorStateComponent } from './components/error-state/error-state.component'

@NgModule({
  declarations: [NavBarComponent, PlaceholderComponent, EmptyStateComponent, ErrorStateComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [NavBarComponent, EmptyStateComponent, PlaceholderComponent, ErrorStateComponent, RouterModule]
})
export class SharedModule {}
