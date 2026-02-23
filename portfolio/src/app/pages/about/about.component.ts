import { Component } from '@angular/core';
import { fadeInAnimation } from '../../animations/fade-in.animation';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
  animations: [fadeInAnimation],
})
export class AboutComponent {

}
