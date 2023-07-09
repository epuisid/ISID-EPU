import { Component } from '@angular/core';
import { SeminarPageData, seminarPageSpec } from 'src/data/seminarspage';

@Component({
  selector: 'app-seminar-page',
  templateUrl: './seminar-page.component.html',
  styleUrls: ['./seminar-page.component.css']
})
export class SeminarPageComponent {
  data:seminarPageSpec = SeminarPageData
}
