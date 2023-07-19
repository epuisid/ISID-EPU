import { Component } from '@angular/core';
import { ContactsPageData, contactsPageSpec } from 'src/data/contactspage';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent {
  data:contactsPageSpec = ContactsPageData;
}
