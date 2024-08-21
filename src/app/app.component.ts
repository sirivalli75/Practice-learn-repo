import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: {ngSkipHydration : 'true'}
})
export class AppComponent {
  title= 'Cascade';
 header() {
  console.log('clicked');
 }
 
downloadResume() {
  const link = document.createElement('a');
    link.href = 'assets/resume/resume.pdf';
    link.download = 'Siri_Pechetti_Resume.pdf';
    link.click();
}
  }

