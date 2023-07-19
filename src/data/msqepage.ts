import { paraSpec } from "./rtl.utils";

export interface msqePageSpecs{
    title:string;
    subtitle:string;
    paragraphs:paraSpec[]
}
export const MSQEPageData:msqePageSpecs = {
    title:`Masters of Science in Quantitative Economics (MSQE)`,
    subtitle:``,
    paragraphs:[
        {
            text:`<a href="http://ideas.repec.org/top/top.india.html">One of the top ranked</a> economics departments in India (futher rankings are available <a href="https://www.aeaweb.org/resources/students/grad-prep/program-rankings">here</a> and <a href="http://econphd.econwiki.com/rankings.htm">here</a>), the Economics and Planning Unit at ISI welcomes students at the Masters level. The Economics and Planning Unit offers a two-year program in Master of Science in Quantitative Economics (MSQE).<br>
            <br>
            Eligibility for the M.S.Q.E. program can be found here: <a href="https://www.isical.ac.in/content/master-science-quantitative-economics-ms-qe">click here</a>.<br>
            <br>
            Course Structure: Courses are taught in four semesters over two years. Students take about four to five courses each semester. Details about courses: <a href="https://www.isical.ac.in/sites/default/files/MS%28QE%292014.pdf">click here</a>.<br>
            <br>
            Admission: Information regarding the admission process is advertised in major Indian newspapers and on our website in February of each year: ISI Admissions. The entrance tests are held in early May, and interviews are held in early July. Detailed information about this is mailed to candidates who apply for the program. A new session starts in late July.
            `,
            image:'assets/campus/classroom2.jpeg',
            reverse:true
        },
        {text:`Some sample question papers with syllabus can be found here: <a href="https://www.isical.ac.in/~admission/">click here</a>. `},
        {text:`Hostel Facilities and Scholarships: Hostel facility will be given on a merit-cum-need basis. However, the hostel is available to all admitted students at the current time. Currently, a stipend is being offered to all admitted students. The stipend is valid initially for the first semester. The amount of stipend for subsequent semesters depends on academic performance and conduct. `},
        {
            text:`Note: that the information given here is not exhaustive. This is only an overview of the program and requirements. For detailed information, contact our student affairs contact Tridip Ray (<it>tridip [at] isid.ac.in</it>). `
        },
        {
            text:`Placement: Our M.S.Q.E. students get placed in industry in India and abroad. Some of the companies which recruited M.S.Q.E. students in the last few years are D.E. Shaw, Genpact, Goldman Sachs, HP Analytics, ICICI Bank, JP Morgan, KPMG, Walmart. Some of our M.S.Q.E. students go abroad for doctoral studies. Over the last few years, our students have received scholarships from <strong>Harvard University, MIT, Princeton University, Yale University, University of Pennsylvania, New York University, University of Minnesota, Northwestern University, Caltech, Columbia University, University of Wisconsin, Cornell University, University of Texas, Austin</strong> and other US universities for their doctoral studies. Visit the <a href="https://www.isid.ac.in/~placement">placement link</a> for further details on campus recruitments.`,
            image:`assets/campus/students2.jpeg`,
        },
    ]
}