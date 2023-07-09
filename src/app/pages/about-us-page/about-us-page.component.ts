import { Component } from '@angular/core';
import { AboutUsData } from 'src/data/aboutuspage';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.css']
})
export class AboutUsPageComponent {
  data = AboutUsData;
}
