import { Component } from '@angular/core';
import { HomePageData, homePageDataSpec } from 'src/data/homepage';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  data:homePageDataSpec = HomePageData;
}
