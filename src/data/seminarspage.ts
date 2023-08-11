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
            title: `tba`,
            speaker: `Namrata Kala, MIT`,
            datetime: ` 25 August 2023, 11:30 AM `,
            venue: ` Seminar Room 2 `,
            description:``
        },
        {
            title: `The (soft) power to tax: compliance and tax morale as imperial legacy`,
            speaker: `Anand Murugesan, Central European University`,
            datetime: ` 01 September 2023, 11:30 AM `,
            venue: ` Seminar Room 2 `,
            description:`Abstract: We hypothesize and empirically show that welfare-improving 
            historical reforms have a lasting impact on tax morale and compliance. We argue that 
            such reforms can generate a path dependence where tax morale, public good quality, 
            and the state's fiscal capacity co-evolve over the long run. We substantiate our 
            argument by examining the effect of historical Habsburg imperial rule on the current 
            propensity to avoid taxation in northern Italian provinces. Our study employs data 
            from an original, incentivized survey on revealed preferences for tax avoidance and 
            an Italian administrative data set on property tax avoidance behavior. We use spatial 
            regression discontinuity design to demonstrate that tax avoidance is lower among 
            respondents from the Habsburg side of the long-gone imperial border in contemporary 
            northern Italy. Investigating the mechanisms for tax compliance and its persistence, 
            we provide evidence that beliefs about tax enforcement are no different, but proxies 
            for tax morale significantly differ within a 100 km band from the erstwhile imperial 
            borders. Our study demonstrates that historically fostered tax morale has a long-run 
            impact on tax compliance, fiscal capacity, and the quality of public goods. `
        },
        {
            title: `tba`,
            speaker: `Shurojit Chatterji, Singapore Management University`,
            datetime: ` 29 September 2023, 11:30 AM `,
            venue: ` Seminar Room 2 `,
            description:``
        },
    ],
    altText:`There are no upcoming seminars. Please check again later.`
}