import { Component } from '@angular/core';
import { ACEGDData, acegdSpec } from 'src/data/acegdpage';

@Component({
  selector: 'app-acegd-page',
  templateUrl: './acegd-page.component.html',
  styleUrls: ['./acegd-page.component.css']
})
export class AcegdPageComponent {
  data:acegdSpec = ACEGDData;
}
