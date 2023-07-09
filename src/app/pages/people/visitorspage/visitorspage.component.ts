import { Component } from '@angular/core';
import { VisitorsPageData, visitorsPageSpec } from 'src/data/visitorspage';

@Component({
  selector: 'app-visitorspage',
  templateUrl: './visitorspage.component.html',
  styleUrls: ['./visitorspage.component.css']
})
export class VisitorspageComponent {
  data:visitorsPageSpec = VisitorsPageData
}
