import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component'
import { BookmarksComponent } from './views/bookmarks/bookmarks.component'
import { HomeComponent } from './views/home/home.component'
import { CoreRoutingModule } from './core-routing.module'
import { SharedModule } from '../shared/shared.module'
import { NewsItemComponent } from './components/news-item/news-item.component'

@NgModule({
  declarations: [HomeLayoutComponent, HomeComponent, BookmarksComponent, NewsItemComponent],
  imports: [CommonModule, CoreRoutingModule, SharedModule]
})
export class CoreModule {}
