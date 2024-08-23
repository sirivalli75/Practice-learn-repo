import {  Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path:'port',component: PortfolioComponent,},
    {path:'about-me', component:AboutMeComponent},
    {path:'contact', component:ContactComponent}
];


