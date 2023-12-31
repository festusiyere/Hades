import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss']
})
export class PlaceholderComponent {
  @Input() number: number = 10
  @Input() isArticles: boolean = false
}
