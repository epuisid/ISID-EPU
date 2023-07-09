import { Component } from '@angular/core';
import { PastSeminarsData, pastSeminarsSpec, seminarSpec } from 'src/data/pastseminarspage';

@Component({
  selector: 'app-past-seminars-page',
  templateUrl: './past-seminars-page.component.html',
  styleUrls: ['./past-seminars-page.component.css']
})
export class PastSeminarsPageComponent {
  data: pastSeminarsSpec = PastSeminarsData;
  query: string = '';
  getQueryResults():seminarSpec[]{
    return this.data.pastSeminars.filter((seminar) => (
      seminar.title.toLowerCase().includes(this.query.toLowerCase())
      ||
      seminar.description.toLowerCase().includes(this.query.toLowerCase())
      ))
  }
}
