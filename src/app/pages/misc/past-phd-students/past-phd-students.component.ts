import { Component,OnInit } from '@angular/core';
import { PastPhdStudent, PastPhdStudentsData, pastphdstudents as pastphdstudentSpec } from 'src/data/pastphdstudents';
export interface orgSpec{
  year:string;
  students:PastPhdStudent[]
}
@Component({
  selector: 'app-past-phd-students',
  templateUrl: './past-phd-students.component.html',
  styleUrls: ['./past-phd-students.component.css']
})
export class PastPhdStudentsComponent implements OnInit{
  data:pastphdstudentSpec = PastPhdStudentsData;
  orgData:orgSpec[] = []
  ngOnInit(){
    let years:string[] = []
    for(let student of this.data.students){
      if(!years.includes(student.year)){
        years.push(student.year)
      }
    }

    this.orgData = years.map((year)=>{
      let students = this.data.students.filter((student)=>student.year===year);
      return {
        year:year,
        students:students
      }
    });
  }
  query: string = '';
  getQueryResults():PastPhdStudent[]{
    return this.data.students.filter((student) => (
      student.name.toLowerCase().includes(this.query.toLowerCase())
      ||
      student.description.toLowerCase().includes(this.query.toLowerCase())
      ))
  }
}
