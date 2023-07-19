import { Component,OnInit } from '@angular/core';
import {othersData, othersSpec } from 'src/data/otherspage';
import { VersatilePageSpec } from 'src/data/rtl.utils';

@Component({
  selector: 'app-others-page',
  templateUrl: './others-page.component.html',
  styleUrls: ['./others-page.component.css']
})
export class OthersPageComponent implements OnInit{
  allData:othersSpec = othersData;
  data:VersatilePageSpec = {
    title:`Loading`,
    groups:[]
  }
  ngOnInit(){
    let parts = (window.location.href).split('/')
    let key = parts[parts.length-1]
    this.data = this.allData[key]
  }
}
