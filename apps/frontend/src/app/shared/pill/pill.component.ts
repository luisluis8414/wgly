import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IconComponent } from '../icon/icon.component'
import { TextComponent } from '../text/text.component'

@Component({
  selector: 'wgly-pill',
  standalone: true,
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss'],
  imports: [CommonModule, IconComponent, TextComponent],
})
export class PillComponent {}
