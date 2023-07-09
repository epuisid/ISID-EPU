import { Component } from '@angular/core';
import { PersonsData, personPageSpec, personsSpec } from 'src/data/personspage';

@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.css']
})
export class PersonPageComponent {
  allPersons:personsSpec = PersonsData;
  data:personPageSpec = {
    name:'Loading...',
    image:'',
    title:'',
    profileLinks:[],
    description:[],
    publications:[]
  }
  ngOnInit(){
    let parts = (window.location.href).split('/')
    let key = parts[parts.length-1]
    this.data = this.allPersons[key]
  }
}
