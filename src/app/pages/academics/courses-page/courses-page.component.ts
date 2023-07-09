import { Component } from '@angular/core';
import { coursesPageData } from 'src/data/coursespage';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent {
  data = coursesPageData;
}
