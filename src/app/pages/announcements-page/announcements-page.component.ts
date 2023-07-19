import { Component } from '@angular/core';
import { AnnouncementsData } from 'src/data/announcementspage';

@Component({
  selector: 'app-announcements-page',
  templateUrl: './announcements-page.component.html',
  styleUrls: ['./announcements-page.component.css']
})
export class AnnouncementsPageComponent {
  data = AnnouncementsData
}
