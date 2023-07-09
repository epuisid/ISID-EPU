import { Component, Input } from '@angular/core';
import { PersonSpec } from 'src/data/facultypage';
@Component({
  selector: 'app-personbox',
  templateUrl: './personbox.component.html',
  styleUrls: ['./personbox.component.css']
})
export class PersonboxComponent {
  @Input() person!:PersonSpec;
  @Input() width?:string;
  styleStr:string = '';
  
}
