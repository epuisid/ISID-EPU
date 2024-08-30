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
            title: `Population Aging, Public Finances, and Alternatives for Retirement Reform`,
            speaker: `Dominik Maurer (Norwegian School of Economics)`,
            datetime: `11:30 AM, 04 October, 2024`,
            venue: ` Seminar Room 2 `,
            description:`We study retirement reforms that ensure sustainable public finances in the face of population aging. We build a structural life-cycle model with a pension scheme that includes a public pay-as-you-go pillar and a mandatory fully-funded pillar. The two pillars interact through a means-testing mechanism: the higher the fully-funded benefit, the lower the public pay-as-you-go benefit. This interaction allows us to assess a reform where increases in fully-funded contributions and benefits reduce public pension benefits through means testing. We compare this reform to three alternatives: increasing the retirement age, cutting public benefits, and raising taxes to finance growing public pension expenditures. Our model, estimated using Danish micro data, suggests that expanding fully-funded pensions to indirectly lower public pensions yields the highest long-run welfare and Hicksian efficiency along the transition. Among the remaining reforms, we find that directly lowering public benefits outperforms both raising taxes and increasing the retirement age.`
        },

        {
            title: `Collateral, Property Rights and Disparities in Credit Access`,
            speaker: `Nirupama Kulkarni (CAFRAL)`,
            datetime: `11:30 AM, 22 November, 2024`,
            venue: ` Seminar Room 2 `,
            description:`Weak property rights can hinder access to collateralized debt, especially in developing countries. This paper documents appraisal gaps that result in lenders valuing the housing collateral of minority borrowers lower than that of non-minority borrowers. Using pan-India data on mortgages with detailed information on minority status, we show that mortgage collateral for minority borrowers is appraised 17\% lower than collateral of non-minority borrowers. Nearly 32\% of this disparity is attributable to between-neighbourhood variation and the remaining to within-neighbourhood variation. An important mechanism is ambiguous property titles of minority-owned properties. Disparity does not arise from differences in the "black money" component of property prices or the creditworthiness of borrowers. Using the digitalization of property records in the state of Rajasthan as a laboratory, we show that strengthening the property rights of minority borrowers narrows the appraisal gap.`
        },
    ],
    altText:`There are no upcoming seminars. Please check again later.`
}