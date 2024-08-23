import { isPlatformBrowser, NgIf } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterOutlet,RouterLink,NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(@Inject(PLATFORM_ID) private platformId:object ){}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
     setTimeout(() => {
       window.scrollTo(0, document.body.scrollHeight);
     }, 0);
   }
 }

  contactInfo = {
    phoneno:"mobile:1234567890",
    emailId:"emaiID:siriaswin23@gmail.com"
  }

}
