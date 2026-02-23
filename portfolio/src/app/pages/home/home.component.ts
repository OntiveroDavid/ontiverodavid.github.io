import { Component } from '@angular/core';
import { fadeInAnimation } from '../../animations/fade-in.animation';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
  animations: [fadeInAnimation],
})
export class HomeComponent {

}
