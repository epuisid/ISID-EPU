import { PlaceholderComponent } from "src/app/pages/placeholder/placeholder.component";
import { miscRoutes } from "./miscroutes";
import { paraSpec } from "./rtl.utils";

export interface FAQinfo {
    question: string;
    answer: paraSpec[];
}

export interface phdProgramSpecs {
    title: string;
    paragraphs: paraSpec[];
    faqs: FAQinfo[];
}

export const PhdPageData: phdProgramSpecs = {
    title: `PhD Program`,
    paragraphs: [
        { text: `<a href="http://ideas.repec.org/top/top.india.html">Ranked among top</a> economics departments in India (further rankings are available <a href="http://www.aeaweb.org/gradstudents/Rankings.php">here</a>), the Economics and Planning Unit at ISI welcomes Ph.D students. The department provides a highly stimulating environment for research in economic theory, macroeconomics, and various areas of applied economics. In addition to the <a title="Faculty" href="http://www.isid.ac.in/~epu/?page_id=46">permanent faculty</a>, the Economics and Planning Unit has many <a title="Visitors" href="http://www.isid.ac.in/~epu/?page_id=48">visiting faculty and post-doctoral fellows</a> from India and abroad. Current <a title="Students" href="http://www.isid.ac.in/~epu/?page_id=52">PhD students</a> are pursuing research in a variety of areas ranging from game theory, economic development, environmental economics, agricultural economics, macroeconomic theory and policy, micro-finance, and international trade.` },
        { text: `Ph.D. students can avail of generous research fellowships offered by the ISI. Students who will do field work to collect their own data or have other needs for research funds can get funding from the PPRU (Planning and Policy Research Unit), an endowment given to the Economics and Planning Unit by the Planning Commission. A congenial and stimulating environment for research includes the active <a title="Events" href="http://www.isid.ac.in/~epu/?page_id=56">seminar series</a>, the <a href="http://www.isid.ac.in/~epu/?page_id=223">annual conference on growth and development</a>, (one of the world’s major conferences in development economics, and the largest in India), and the opportunity to interact with internationally established empirical researchers through the <a href="http://www.theigc.org/countries/india-central">International Growth Centre</a>-ISI <a href="http://www.theigc.org/events/igc-isi-india-development-policy-conference-0">conferences</a>. There are ample opportunities to go to national and international conferences and present research. Doctoral students typically get funded for one international conference a year, subject to the availability of funding. The presence of a very strong <a href="http://www.isid.ac.in/%7Estatmath/"> Statistics and Mathematics Unit</a> at the ISI, Delhi, means that Ph.D. students interested in applied work or econometrics have additional intellectual resources to draw upon.`,
        image:`assets/campus/Seminar3.jpg` },
        { text: `Past Doctoral students from our doctoral program have been placed at top departments in India and abroad:` },
        { text: `To know about our past PhD students, please click below:` },
        {internalLink:miscRoutes['pastPhdStudents']},
        { text: `Below are a set of FAQs that we regularly encounter from prospective students.` }
    ],
    faqs: [
        {
            question: `How do I apply to ISI’s Ph.D. program?`,
            answer: [
                { text: `There are two ways of becoming a PhD student at the Economics and Planning Unit, depending on whether you want to avail of a Junior Research Fellowship (JRF) from the ISI, or not.` },
                { text: `<strong>If you want a JRF</strong>, you must pass a nation-wide written selection test which has two papers: one in Mathematics (called RE 1) and one in Economics (called RE 2). The exam is typically held in the second week of May of each year. After passing the written selection test, you will be invited for an interview which is held in the first or second week of July. Successful clearing of the interview leads to the award of a Junior Research Fellowship (JRF) and enrollment in the PhD program. The average intake over the past few years is roughly five students.` },
                { text: `<strong>The syllabus and sample exam</strong> are available <a href="http://www.isical.ac.in/~deanweb/sample2013.html">here</a>.` },
                { text: `<strong>If you do not want a JRF</strong> fellowship, write to the Chairman of the Research Fellows Advisory Committee (cghate [at] isid.ac.in) with your CV. If you are eligible, you will be interviewed by a committee, and admitted to the PhD program if you pass the interview. Within two years of your admission, you must pass the written Selection Test for JRF’s. Please note that students entering through this route have outstanding academic backgrounds.` },
            ]
        },
        {
            question: `How is the program structured?`,
            answer: [
                {
                    text: `On entry to the program, based on preliminary research interests, each student is assigned to a faculty advisor. Based on the prior academic record of the entering student, the advisor recommends a sequence of courses for the student to take offered by the faculty. Most students spend their first year, or first three semesters taking a variety of regular and reading courses (mainly in the Economics and Planning Unit, but also in the Stat-Math unit). Strong course work is an essential ingredient in writing a good thesis. These courses are taken for a grade and are rigorous and demanding. After two years, the candidate is promoted to SRF (Senior Research Fellow) assuming successful completion of their second year.`
                }
            ]
        },
        {
            question: `What happens after the second year?`,
            answer: [
                {
                    text: `All doctoral students are required to present a 5th semester paper to the faculty. This paper constitutes major work done by the student, whether it is empirical, or theoretical, on a first paper, or first chapter of the student’s thesis. Each annual promotion after the second year (third year and beyond) requires approval from both the RFAC (Research Fellow Advisory Committee) as well as the student’s thesis committee.`
                }
            ]
        },
        {
            question: `How long does it take to finish a Ph.D.?`,
            answer: [
                {
                    text: `The median is about 6 years, although many students submit their thesis in 5 and a 1/2 years. This is the same amount of time it takes in top doctoral programs in the US and Europe. Funding is currently provided for the first five years. Under the current rules, students register their Ph.D’s after the first two years.`
                }
            ]
        },
        {
            question: `Can I do my Ph.D. part time?`,
            answer: [
                {
                    text: `While nothing in the rules prevent this, our strong recommendation is a no. If you are employed, it is better to take study leave.`
                }
            ]
        },
        {
            question: `Suppose my background is in engineering or physics, or some other field, should I still take the Selection Test?`,
            answer: [
                {
                    text: `If you don’t have formal training in economics as part of your education, we strongly encourage you to contact us, or take the Selection Test. We have had several students in the past who have successfully completed our doctoral program (and passed the Selection Test) who didn’t have economics as a first line of study.`
                }
            ]
        },
        {
            question: `If I choose to work, do I have to give up my JRF/SRF Funding?`,
            answer: [
                { text: `Yes, under the current rules, you cannot be paid by two sources.` }
            ]
        },
        {
            question: `What about hostel accommodation?`,
            answer: [
                { text: `This is provided to all Ph.D. students who wish to avail of it.` }
            ]
        },
        {
            question: `Why should I do my Ph.D. at the ISI?`,
            answer: [
                { text: `Because it is a world-class doctoral program in economics, with top faculty in many fields. We find there is huge value added to our students compared to when they enter. They are able to think on their feet when they are done, and become outstanding faculty members in other universities.` }
            ]
        },
    ]
}