import { isPlatformBrowser, NgIf } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [RouterOutlet,RouterLink,NgIf],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  aboutMeInfo = {
    info:"I worked as a jr angular frontend developer nearly 3 years.I completed my batchelors degree in EEE."
  };

}
