import { Component, Input } from '@angular/core';
import { PersonSpec } from 'src/data/facultypage';

@Component({
  selector: 'app-studentbox',
  templateUrl: './studentbox.component.html',
  styleUrls: ['./studentbox.component.css']
})
export class StudentboxComponent {
  @Input() person!:PersonSpec;
  @Input() width?:string;
  styleStr:string = '';
}
