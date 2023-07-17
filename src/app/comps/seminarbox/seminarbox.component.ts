import { Component, Input } from '@angular/core';
import { seminarSpec } from 'src/data/pastseminarspage';

@Component({
  selector: 'app-seminarbox',
  templateUrl: './seminarbox.component.html',
  styleUrls: ['./seminarbox.component.css']
})
export class SeminarboxComponent {
  @Input() seminar!:seminarSpec;
}
