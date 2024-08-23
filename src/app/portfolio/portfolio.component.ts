import { isPlatformBrowser, NgIf } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import {  RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterOutlet, RouterLink,NgIf],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}
 
  ngOnInit(): void {
     if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight);
      }, 0);
    }
  }
  portfolioInfo = {
    name :"sirivalli pechetti",
    occupation: "frontend developer"
  };
 
}