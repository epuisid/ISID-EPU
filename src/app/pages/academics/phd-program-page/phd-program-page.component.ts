import { Component } from '@angular/core';
import { FAQinfo, PhdPageData, phdProgramSpecs } from 'src/data/phdprogrampage';

@Component({
  selector: 'app-phd-program-page',
  templateUrl: './phd-program-page.component.html',
  styleUrls: ['./phd-program-page.component.css']
})
export class PhdProgramPageComponent {
  data:phdProgramSpecs = PhdPageData;
  query: string = '';
  getQueryResults():FAQinfo[]{
    return this.data.faqs.filter((faq) => (
      faq.question.toLowerCase().includes(this.query.toLowerCase())
      ||
      faq.answer.map((para)=>para.text).join().toLowerCase().includes(this.query.toLowerCase())
      ))
  }
}
