import { Component, Input } from '@angular/core';
import { publication } from 'src/data/personspage';

@Component({
  selector: 'app-publication-box',
  templateUrl: './publication-box.component.html',
  styleUrls: ['./publication-box.component.css']
})
export class PublicationBoxComponent {
  @Input() paper!:publication;
  getAuthorText(paper:publication){
    let lastAuthor:string = paper.authors[paper.authors.length-1];
    if(paper.authors.length===1){
      return lastAuthor
    }
    if(lastAuthor==='et al.'){
      return paper.authors.join(', ')
    }
    return paper.authors.slice(0,-1).join(', ')+' and '+ lastAuthor;
  }
}
