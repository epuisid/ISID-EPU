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
            title: `Flexible Bayesian Quantile Analysis of Residential Rental Rates`,
            speaker: `Mohammed Arshad Rahman, IIT Kanpur`,
            datetime: ` 26 Sept 2023, 4 PM `,
            venue: ` Seminar Room 2 `,
            description:`This article develops a random effects quantile regression model for panel data that allows for increased distributional flexibility, multivariate heterogeneity, and time-invariant covariates in situations where mean regression may be unsuitable. Our approach is Bayesian and builds upon the generalized asymmetric Laplace distribution to decouple the modeling of skewness from the quantile parameter. We derive an efficient simulation-based estimation algorithm, demonstrate its properties and performance in targeted simulation studies, and employ it in the computation of marginal likelihoods to enable formal Bayesian model comparisons. The methodology is applied in a study of U.S. residential rental rates following the Global Financial Crisis. Our empirical results provide interesting insights on the interaction between rents and economic, demographic and policy variables, weigh in on key modeling features, and overwhelmingly support the additional flexibility at nearly all quantiles and across several sub-samples. The practical differences that arise as a result of allowing for flexible modeling can be nontrivial, especially for quantiles away from the median.`
        },
        {
            title: `tba`,
            speaker: `Shurojit  Chatterji, Singapore Management University`,
            datetime: ` 29 September 2023, 11:30 AM `,
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