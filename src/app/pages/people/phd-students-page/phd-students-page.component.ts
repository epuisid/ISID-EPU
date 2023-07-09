import { Component } from '@angular/core';
import { PhDStudentsData, PhdStudentsSpec } from 'src/data/phdstudentspage';

@Component({
  selector: 'app-phd-students-page',
  templateUrl: './phd-students-page.component.html',
  styleUrls: ['./phd-students-page.component.css']
})
export class PhdStudentsPageComponent {
  data:PhdStudentsSpec = PhDStudentsData;
}
