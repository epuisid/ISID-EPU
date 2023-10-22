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
            title: `Flexible Bayesian Quantile Analysis of Residential Rental Rates`,
            speaker: `Arshad Rahman, Indian Institute of Technology, Kanpur`,
            datetime: ` 03 November 2023, 11:30 AM `,
            venue: ` Seminar Room 2 `,
            description:`Abstract: This article develops a random effects quantile regression model for panel data that allows for increased distributional flexibility, multivariate heterogeneity, and time-invariant covariates in situations where mean regression may be unsuitable. Our approach is Bayesian and builds upon the generalized asymmetric Laplace distribution to decouple the modeling of skewness from the quantile parameter. We derive an efficient simulation-based estimation algorithm, demonstrate its properties and performance in targeted simulation studies, and employ it in the computation of marginal likelihoods to enable formal Bayesian model comparisons. The methodology is applied in a study of U.S. residential rental rates following the Global Financial Crisis. Our empirical results provide interesting insights on the interaction between rents and economic, demographic and policy variables, weigh in on key modeling features, and overwhelmingly support the additional flexibility at nearly all quantiles and across several sub-samples. The practical differences that arise as a result of allowing for flexible modeling can be nontrivial, especially for quantiles away from the median.`
        },
        {
            title: `Deadweight Losses or Gains from In-kind Transfers:  Experimental Evidence`,
            speaker: `Gaurav Datt, Monash University`,
            datetime: `17 November 2023, 11:30 AM `,
            venue: ` Seminar Room 2 `,
            description:`Abstract: Are in-kind transfers associated with deadweight losses?  To answer this, we conducted an incentivized field experiment in India, which offered low-income households the choice between a free quantity of rice and varying amounts of cash to elicit their willingness to pay for rice. Contrary to expectation, we find evidence of deadweight gain on average, though with a striking contrast between a deadweight loss among women from female-headed households and a deadweight gain among respondents from male-headed households.  Our results highlight the role of gender differences in bargaining power in shaping the choice between cash or rice.`
        },
        {
            title: `Persistence in physicians’ locations: Long-run evidence from decentralised loan repayment programs`,
            speaker: `Anomita Ghosh, University of Illinois, Urbana-Champaign`,
            datetime: `24 November 2023, 11:30 AM`,
            venue: ` Seminar Room 2 `,
            description:`Abstract: Do temporary labor supply programs cause physicians to move to and stay in undesirable areas? To what extent do these programs improve the health of the vulnerable population in those areas? I investigate these questions by studying state and local loan repayment programs for new eligible physicians which were rolled out over the last four decades in hundreds of counties across US states. Leveraging a new longitudinal dataset that tracks all physicians from medical school to mid-career, and exploiting both space and time variation, I find that these policies increase the number of physicians by 5% in treated counties relative to untreated counties in the state. The inflows of physicians are driven by higher paying eligible specialties. The programs continue to influence physicians' location decisions even after they end -- effects persist for at least ten years after the minimum obligation period. Furthermore, the programs modestly spur trainees to enter eligible specialties in treated states by substituting away from ineligible specialties. Treated counties also see the elderly increase their visits to physicians while reducing those to the emergency rooms. Using patient level data from California, I demonstrate these results are not driven by selective admission of patients to treated hospitals. Overall, my findings emphasize the importance of policies that reduce financial frictions for highly skilled professionals in shaping not only their migration and labor market trajectories, but also the health outcomes of people in their communities.  A welfare analysis of these programs suggests that every dollar of government spending produces a net of around $0.6 in benefits to both recipients and non-recipients.`
        },
    ],
    altText:`There are no upcoming seminars. Please check again later.`
}