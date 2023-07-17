import { Component } from '@angular/core';
import { PastSeminarsData, pastSeminarsSpec, seminarSpec } from 'src/data/pastseminarspage';

@Component({
  selector: 'app-past-seminars-page',
  templateUrl: './past-seminars-page.component.html',
  styleUrls: ['./past-seminars-page.component.css']
})
export class PastSeminarsPageComponent {
  data: pastSeminarsSpec = PastSeminarsData;
  query: string = '';
  
  getQueryResults():seminarSpec[]{
    const lowercaseQuery = this.query.toLowerCase();
    return this.data.pastSeminars.filter((seminar)=>seminarQueryMatch(seminar,lowercaseQuery))
  }
}

export function seminarQueryMatch(seminar:seminarSpec, query:string){
  let seminarStr = seminar.title;
  if(seminar.description){
    seminarStr+=seminar.description;
  }
  if(seminar.speaker){
    seminarStr+=seminar.speaker;
  }
  if(seminar.venue){
    seminarStr+=seminar.venue;
  }
  return seminarStr.toLowerCase().includes(query)
}