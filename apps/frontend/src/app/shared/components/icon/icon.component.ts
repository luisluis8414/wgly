import { Component, HostBinding, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'wgly-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() @HostBinding('class') size:
    | 'small'
    | 'medium'
    | 'large'
    | 'x-large' = 'small'
}
