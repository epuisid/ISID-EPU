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
            title: `Firm presence, environmental quality, and economic activity`,
            speaker: `Namrata Kala, MIT`,
            datetime: ` 25 August 2023, 11:30 AM `,
            venue: ` Seminar Room 2 `,
            description:`Abstract: Firm location decisions are one of the most important decisions managers make, optimizing factors such as proximity to customers, suppliers, and useful information. The inherent endogeneity of firm location decisions renders estimating the impact of firm presence difficult. In this paper, we use an environmental relocation policy that randomly moved over 20,000 small firms operating within city limits in New Delhi to industrial areas outside the city over several years. We find that a reduction in firm presence has a small impact on measured air quality, and is costly for firms: relocated firms have a high rate of exit, which increases in the distance relocated. There are no precise long-term effects on neighborhood-level population density or composition. Next, using random placement in the industrial area, we recover reduced-form elasticities of agglomeration of having similar firms closer to a given firm, using firm survival as the outcome. These elasticities allow us to generate counterfactual allotments of plots to firms, which can reduce aggregate firm exit caused by the policy, thereby lowering costs to firms of this commonly used environmental policy tool.`
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
            speaker: `Mohammed Arshad Rahman, IIT Kanpur`,
            datetime: ` 26 Sept 2023, 4 PM `,
            venue: ` Seminar Room 2 `,
            description:``
        },
        {
            title: `tba`,
            speaker: `Shurojit Chatterji, Singapore Management University`,
            datetime: ` 29 September 2023, 11:30 AM `,
            venue: ` Seminar Room 2 `,
            description:``
        },
        {
            title: `tba`,
            speaker: `Prakash Singh, Plaksha University`,
            datetime: ` 06 October 2023, 11:30 AM `,
            venue: ` Seminar Room 2 `,
            description:``
        },
        {
            title: `tba`,
            speaker: `Alessandro Pavan, Northwestern University`,
            datetime: ` 13 October 2023, 11:30 AM `,
            venue: ` Seminar Room 2 `,
            description:``
        },
    ],
    altText:`There are no upcoming seminars. Please check again later.`
}