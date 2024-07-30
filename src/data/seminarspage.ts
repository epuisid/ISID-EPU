import { miscRoutes } from "./miscroutes";
import { seminarSpec } from "./pastseminarspage";
import { paraSpec } from "./rtl.utils";

export interface seminarPageSpec{
    title:string;
    paragraphs:paraSpec[]
    upcomingSeminarsTitle:string;
    upcomingSeminars:seminarSpec[]    
    altText:string;
}

export const SeminarPageData:seminarPageSpec = {
    title:`Seminars`,
    paragraphs:[
        {
            text:`Please register for the seminar in order to receive invitations, by clicking the link below:
            <br>
            <br>
            <a href="https://forms.gle/prEBGTYj5Ctdzd2i9" >Webinar registration</a>
            <br>
            <br>
            
            For questions, please contact our seminar coordinator <strong> E. Somanathan</strong> at <em>som [at] isid.ac.in</em>.
            Our seminars are usually at <b>11:30 AM on Fridays for 75 minutes</b>. <br>
            Our past webinars (some with recordings) have been archived here:
            <br>
            <br>
            
            <a href="misc/pastseminars">Past Seminars</a>
            <br>`,
            image:`assets/campus/Seminar2.jpg`,
            reverse:true
        }
    ],
    upcomingSeminarsTitle:`Upcoming Seminars`,
    upcomingSeminars:[


        {
            title: `Panics and Early Warnings`,
            speaker: `Deepal Basak, Indiana University`,
            datetime: `3 PM, 05 August (Monday)`,
            venue: ` Seminar Room 2 `,
            description:`Abstract: We study optimal adversarial information design in a dynamic regime change game. Agents
decide when to attack, if at all. We assume (1) delay incurs a continuous cost and (2) agents doubt
the correctness of their actions. The game may end in a “disaster” due to weak fundamentals or
panic — agents attacking despite sound fundamentals. We propose a “timely disaster alert” that
promptly warns about impending disasters, making waiting for and following the alert the unique
rationalizable strategy, thereby eliminating panic. We relate this optimal policy to early warning
systems such as bank stress tests and debt sustainability analysis.`
        },
    ],
    altText:`There are no upcoming seminars. Please check again later.`
}