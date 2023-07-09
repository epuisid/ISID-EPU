import { Component } from '@angular/core';
import { textPageSpec } from 'src/data/rtl.utils';
import { WorkshopsPageData } from 'src/data/workshopspage';

@Component({
  selector: 'app-workshops-page',
  templateUrl: './workshops-page.component.html',
  styleUrls: ['./workshops-page.component.css']
})
export class WorkshopsPageComponent {
  data:textPageSpec = WorkshopsPageData;
}
