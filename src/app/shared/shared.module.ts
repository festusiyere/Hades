import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { RouterModule } from '@angular/router'
import { PlaceholderComponent } from './components/placeholder/placeholder.component'
import { HttpClientModule } from '@angular/common/http'
import { EmptyStateComponent } from './components/empty-state/empty-state.component'
import { ErrorStateComponent } from './components/error-state/error-state.component'
import { CustomErrorComponent } from './component/custom-error/custom-error.component'

@NgModule({
  declarations: [NavBarComponent, PlaceholderComponent, EmptyStateComponent, ErrorStateComponent, CustomErrorComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [NavBarComponent, CustomErrorComponent, EmptyStateComponent, PlaceholderComponent, ErrorStateComponent, RouterModule]
})
export class SharedModule {}
