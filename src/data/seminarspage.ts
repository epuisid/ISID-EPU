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
            title: `On efficiency with heterogenous forecasts`,
            speaker: `Shurojit  Chatterji, Singapore Management University`,
            datetime: ` 29 September 2023, 11:30 AM `,
            venue: ` Seminar Room 2 `,
            description:`Do price forecasts of rational economic agents need to coincide in intertemporal perfectly competitive complete markets in order for markets to allocate resources efficiently? Recent work in a two-period model with a nominal bond has shown that there is a one dimensional set of efficient allocations for generic endowments that can be sustained by heterogenous forecasts. Moreover, these efficient allocations can be supported by forecasts that disagree up to one degree of freedom. Thus, strong as efficiency and perfect competition may appear, they do not imply perfect foresight, but they do add explanatory power to temporary equilibrium, since they select a small subset out of the Pareto efficient allocations, which generally have higher dimension. We next study a muti-period model with a nominal bond that matures in one period and identify the set of efficient allocations that can be sustained as Walrasian equilibria with heterogenous forecasts. We then add a long maturity bond, which under perfect foresight would be a redundant asset, and show that it fundamentally expands the set of efficient allocations that can be sustained as Walrasian equilibria. Indeed all wealth transfers compatible with efficiency can arise endogenously. The key feature driving this conclusion are forecasting errors, which lead to ex post arbitrage opportunities that induce these income transfers.`
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