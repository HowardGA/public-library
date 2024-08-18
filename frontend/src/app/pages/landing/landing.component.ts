import { Component } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCardModule } from 'ng-zorro-antd/card';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NzCarouselModule,NzCardModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  array = [1, 2, 3, 4];
}
