import { Component } from '@angular/core';
import { fadeInAnimation } from '../../animations/fade-in.animation';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  animations: [fadeInAnimation],
})
export class ContactComponent {

}
