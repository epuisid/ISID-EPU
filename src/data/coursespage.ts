import { paraSpec } from "./rtl.utils";

export interface coursesPageSpec{
    title:string;
    groups:{
        title?:string;
        paragraphs:paraSpec[]
    }[]
}
//no title in group=>boxless paragraphs
//no paragraphs in box means paraless titles.
export const coursesPageData:coursesPageSpec = {
    title:'Courses',
    groups:[
        {
            paragraphs:[{
                text:`The semester wise breakup of courses for our MSQE students is given below. Our doctoral students also take courses from this list along with some seminar courses offered by individual faculty.`
            }]
        },
        {
            title:`Semester I`,
            paragraphs:[
                {
                    text:`Econ271A: Microeconomics I<br>
                    Econ272A: Game Theory I<br>
                    Stat271: *Statistics<br>
                    Math271: *Mathematical Methods<br>
                    One Optional Course (Usually, we offer Comp271: Computer Programming and Applications here and encourage all students to take that optional.)`
                },
                {
                    text:`* Students having Mathematics and/or Statistics as major/honours subjects at their Bachelor’s level, are required to take suitable other courses (in consultation with the Class Teacher) in lieu of Math 271 and Stat 271 courses.`
                }
            ]
        },
        {
            title:`Semester II`,
            paragraphs:[
                {
                    text:`Econ271B: Microeconomics II<br>
                    Econ273A: Econometric Methods I<br>
                    Econ274A: Macroeconomics I<br>
                    Two Optional Courses`
                }
            ]
        },
        {
            title:`Semester III`,
            paragraphs:[
                {
                    text:`Econ274B: Macroeconomics II<br>
                    Four Optional Courses`
                }
            ]
        },
        {
            title:`Semester IV`,
            paragraphs:[
                {
                    text:`Five Optional Courses`
                }
            ]
        },
        {
            title:`List of Optional Courses`,
            paragraphs:[
                {
                    text:`Below is a list of all optional courses. A subset of these courses are offered every semester.`
                },
                {
                    text:`Econ272B: Game Theory II<br>
                    Econ273B: Econometric Methods II<br>
                    Econ275: Agricultural Economics<br>
                    Econ276A: Industrial Organization<br>
                    Econ276B: Advanced Topics in Industrial Organization<br>
                    Econ277A: Economic Development I<br>
                    Econ277B: Economic Development II<br>
                    Econ277C: Economic Development III<br>
                    Econ278: Modern Growth Theory<br>
                    Econ279A: Selected Topics I<br>
                    Econ279B: Selected Topics II<br>
                    Econ279C: Selected Topics III<br>
                    Econ280A: Individual and Collective Choice<br>
                    Econ280B: Political Economy<br>
                    Econ281: Incentives and Organizations<br>
                    Econ282: Incentives and Regulation<br>
                    Econ283A: Econometric Applications I<br>
                    Econ283B: Econometric Applications II<br>
                    Econ284: Bayesian Econometrics<br>
                    Econ285: Inter temporal Economics<br>
                    Econ286: Theory of Planning<br>
                    Econ287: Social Accounting<br>
                    Econ288: Public Economics<br>
                    Econ289: Regional Economics<br>
                    Econ290A: International Economics I<br>
                    Econ290B: International Economics II<br>
                    Econ290C: Advanced Topics in International Economics<br>
                    Econ291: Mathematical Programming with Applications to Economics<br>
                    Econ292: Monetary Economics<br>
                    Econ293: History of Economic Thought<br>
                    Econ294: Environmental Economics<br>
                    Econ295A: Finance I<br>
                    Econ295B: Finance II<br>
                    Econ295C: Finance III<br>
                    Econ296: Comparative Systems<br>
                    Econ297: Law and Economics<br>
                    Econ298: Basic Economics<br>
                    Econ299: Indian Economy: Selected Topics<br>
                    Econ300: Experimental and Behavioural Economics<br>
                    Econ301A: Project<br>
                    Econ301B: Thesis<br>
                    Econ302: The Theory of Mechanism Design<br>
                    Econ303: Corporate Finance<br>
                    Econ304: Global Macreconomics<br>
                    Econ305: Labour Economics<br>
                    Stat272: Sample Survey: Theory and Practice<br>
                    Stat273: Time Series Analysis and Forecasting<br>
                    Comp271: Computer Programming and Applications`
                },
                {
                    text:`<strong>The syllabi and the references for all the courses are available</strong> <a href="https://www.isical.ac.in/sites/default/files/MS%28QE%292014.pdf">here</a>.`
                }
            ]
        },
        {
            title:`About optional courses Econ301A (Project) and Econ301B (Thesis)`,
            paragraphs:[]
        },
        {
            title:`Overview`,
            paragraphs:[
                {
                    text:`The objective behind these two courses is to develop a capacity for independent thinking and a taste for research among the students. Course Econ301A, if offered, will be in Semester III, and Econ301B, if offered, will be in Semester IV.`
                },
                {
                    text:`Econ301A (Project) is a pre-requisite for Econ301B (Thesis).`
                },
                {
                    text:`The following are the rules for allowing a student to opt for \`thesis' in the fourth semester.`
                },
                {
                    text:`If a student who has opted for \`project' in the third semester likes to continue with the optional course \`thesis' in the last (fourth) semester, he/she has to satisfy either of the following conditions:<br>
                    (a) His/her average score (averaged over the aggregates obtained in the first three semesters) is 65 percent or above;<br>
                    (b) His/her score in the \`project' is 80 percent or above.`
                },
            ]
        },
        {
            title:`Guidelines`,
            paragraphs:[
                {
                    text:`The project/thesis supervisor can only be a regular or visiting faculty member of the Institute. It is the responsibility of the student to find a suitable supervisor from amongst the faculty members of the respective Centre for both \`project' and \`thesis'.`,
                },
                {
                    text:`The student shall also submit a Thesis Proposal, prepared in consultation with supervisor, and having the supervisor's written approval, to the Dean of Studies or the In-charge, Students' Academic Affairs within the due date.`
                },
                {text:`A supervisor may supervise at most three students on three different projects.`},
                {text:`If a supervisor is unable to continue as supervisor for whatever reason, the supervisor must find a substitute who shall supervise the concerned student on the same topic.`},
                {text:`The distribution of weights for a project/thesis course shall be 20% for mid-semester assessment by the supervisor and 80% for semester-end assessment by the supervisor and two other examiners who are regular or visiting faculty of the Institute. Regular faculty members of other recognized universities/ institutes may also be considered as examiners. The supervisor will identify the two other examiners and submit their names directly to the Dean of Studies or the In-charge, Students' Academic Affairs by the due date.`},
                {text:`The student shall submit one hard copy of the work done for the mid-semester evaluation to the supervisor by a date decided by him/her. The supervisor shall forward this hard copy, together with a mid-semester score out of 100, to the Dean of Studies or the In-charge, Students' Academic Affairs directly within the due date.`},
                {text:`The student shall submit the project/thesis to the supervisor within the due date. The supervisor should forward copies to the relevant people.<br>
                The student shall make an oral presentation of the project/thesis within the due date to the supervisor and two other examiners; the semester-end assessment shall be based on the project/thesis and the oral presentation. The weights for the semester-end assessment shall be at least 60% on the thesis and at least 30% on the oral presentation, adding up to 100%. The final weights should be decided by the supervisor in consultation with the examiners. The supervisor will inform the Dean of Studies or the In-charge, Students' Academic Affairs of the final weights, while submitting the name of the examiners. The supervisor will also inform the student. The supervisor and the two other examiners may score separately, or give a combined score. When supervisor and the two other examiners score separately, the simple average or the median shall be the final score.<br>
                The date and time for the project/thesis presentation shall be decided by the supervisor in consultations with two other examiners. The Dean of Studies, or the In-charge, Students' Academic Affairs should be informed of the thesis presentation preferably a week in advance, with a minimum of three working days' notice.`},
                {text:`The Dean's Office or the In-Charge Student Academic Affairs will announce the thesis presentation dates and time; the presentation will be open to all. However, the evaluation will be open only to the supervisor and the examiners.`},
                {text:`The minimum composite score to pass any of these two optional courses is 35%. In case a student obtains less than 45% in the composite score in any of these two optional courses, the student will be offered an opportunity to appear for a back-paper examination. The student should submit a revised project/thesis by the last working day before the back-paper examinations for that semester. There will be a project/thesis presentation during the week of the back-paper examination, the date will be finalized by the supervisor in consultation with the examiners and be conveyed to the Dean of Studies, or the In-charge, Students' Academic Affairs for announcement as done in the usual Project Presentation. The scoring will be based only on the new project/thesis presentation. The maximum possible score in the back paper examination shall be 45%. The other rules and regulations regarding back-paper examinations for a regular subject will also apply.`},
                {text:`The supervisor shall forward the semester-end score (out of 100) to the Dean of Studies or the In-charge, Students' Academic Affairs directly within due date.`},
            ]
        }
    ]
}