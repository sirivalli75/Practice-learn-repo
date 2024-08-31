import { isPlatformBrowser, NgIf } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {  RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterOutlet, RouterLink,NgIf,FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  yourname: string = '';
  terms: boolean =false;
  type: string='';
  emailaddres: string='';
  company: string='';
  phonenumber: string='';
  portfolioInfo = {
    name :"sirivalli pechetti",
    occupation: "frontend developer"
  };
  availabilityInfo(formValue:NgForm){
  alert('Form submitted successfully!');
  } 
 
}