import { Component, HostBinding, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'wgplanner-heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
})
export class HeadingComponent {
  @Input() type:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'primaryContainer'
    | 'secondaryContainer'
    | 'tertiaryContainer' = 'primary'

  @HostBinding('class') get class() {
    return this.type
  }
}
