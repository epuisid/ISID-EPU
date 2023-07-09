import { Component } from '@angular/core';
import { facultyPageData, facultyPageSpecs } from 'src/data/facultypage';

@Component({
  selector: 'app-faculty-page',
  templateUrl: './faculty-page.component.html',
  styleUrls: ['./faculty-page.component.css']
})
export class FacultyPageComponent {
  data:facultyPageSpecs = facultyPageData;
}
