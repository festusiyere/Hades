import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component'
import { BookmarksComponent } from './views/bookmarks/bookmarks.component'
import { HomeComponent } from './views/home/home.component'

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', component: HomeComponent },
      { path: 'bookmarks', pathMatch: 'full', component: BookmarksComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
