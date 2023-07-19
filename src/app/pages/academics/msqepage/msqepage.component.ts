import { Component } from '@angular/core';
import { MSQEPageData, msqePageSpecs } from 'src/data/msqepage';

@Component({
  selector: 'app-msqepage',
  templateUrl: './msqepage.component.html',
  styleUrls: ['./msqepage.component.css']
})
export class MsqepageComponent {
  data:msqePageSpecs = MSQEPageData;
}
