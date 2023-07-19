import { Component } from '@angular/core';
import { PlacementPageData } from 'src/data/placementspage';

@Component({
  selector: 'app-placementspage',
  templateUrl: './placementspage.component.html',
  styleUrls: ['./placementspage.component.css']
})
export class PlacementspageComponent {
  data = PlacementPageData;
}
