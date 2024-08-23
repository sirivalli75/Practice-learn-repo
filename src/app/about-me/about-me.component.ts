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
  constructor(@Inject(PLATFORM_ID) private platformId: object){}

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        window.scrollTo(0,document.body.scrollHeight);},
      0);
    }

  }
  aboutMeInfo = {
    info:"I worked as a jr angular frontend developer nearly 3 years.I completed my batchelors degree in EEE."
  };

}
