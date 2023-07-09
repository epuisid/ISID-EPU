import { Component } from '@angular/core';
import { footerRoutes } from 'src/data/navigation';

@Component({
  selector: 'app-sitefooter',
  templateUrl: './sitefooter.component.html',
  styleUrls: ['./sitefooter.component.css']
})
export class SitefooterComponent {
  links = footerRoutes;
}
