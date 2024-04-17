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
            title: `Are the Effects of Climate Change on Agriculture Underestimated? A Disaggregated Analysis for India`,
            speaker: `Shreekant Gupta, Delhi School of Economics`,
            datetime: `24 April 2024 (Wednesday), 11:30 AM`,
            venue: ` Classroom 14 `,
            description:`Abstract: An extensive and growing body of literature on the consequences of climate change for agriculture provides a diverse array of estimated effects. This paper contends documented effects of climate change in the literature are underestimated for three reasons: the use of static specifications, the neglect or inadequate treatment of intra-year variability in key climate change variables, and the asymmetric impact of positive and negative climate shocks. We illustrate this underestimation by presenting a case study focused on the Indian agricultural sector. Through addressing these sources of underestimation our results indicate large long-run impacts of rainfall and temperature anomalies on yields for a range of food and non-food crops.`
        },
        {
            title: `TBA`,
            speaker: `Neha Khanna, Binghamton University`,
            datetime: `05 July 2024, 11:30 AM`,
            venue: ` Seminar Room 2 `,
            description:`Abstract: TBA`
        },
    ],
    altText:`There are no upcoming seminars. Please check again later.`
}