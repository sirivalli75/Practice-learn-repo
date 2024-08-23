import { AfterViewInit, Component, OnInit } from '@angular/core';
import {  ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Router } from 'express';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: {ngSkipHydration : 'true'}
})
export class AppComponent  {
  title= 'Cascade';
  
  
downloadResume() {
  const link = document.createElement('a');
    link.href = 'assets/resume/resume.pdf';
    link.download = 'Siri_Pechetti_Resume.pdf';
    link.click();
}
}
