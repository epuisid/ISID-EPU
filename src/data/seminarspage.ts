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
            title: `TBA`,
            speaker: `Swagata Bhattacharjee (Jindal Global University)`,
            datetime: `11:30 AM, 15 November, 2024`,
            venue: ` Seminar Room 2 `,
            description:``
        },

        {
            title: `Collateral, Property Rights and Disparities in Credit Access`,
            speaker: `Nirupama Kulkarni (CAFRAL)`,
            datetime: `11:30 AM, 22 November, 2024`,
            venue: ` Seminar Room 2 `,
            description:`Weak property rights can hinder access to collateralized debt, especially in developing countries. This paper documents appraisal gaps that result in lenders valuing the housing collateral of minority borrowers lower than that of non-minority borrowers. Using pan-India data on mortgages with detailed information on minority status, we show that mortgage collateral for minority borrowers is appraised 17\% lower than collateral of non-minority borrowers. Nearly 32\% of this disparity is attributable to between-neighbourhood variation and the remaining to within-neighbourhood variation. An important mechanism is ambiguous property titles of minority-owned properties. Disparity does not arise from differences in the "black money" component of property prices or the creditworthiness of borrowers. Using the digitalization of property records in the state of Rajasthan as a laboratory, we show that strengthening the property rights of minority borrowers narrows the appraisal gap.`
        },

        {
            title: `Soil Endowments and Intra-Household Distribution of Consumption in India: A Structural Approach`,
            speaker: `Bipasha Maity, Ashoka University`,
            datetime: `11:30 AM, 29 November, 2024`,
            venue: ` Seminar Room 2 `,
            description:``
        },

        {
            title: `TBA`,
            speaker: `Prachi Mishra, Ashoka University`,
            datetime: `11:30 AM, 06 December, 2024`,
            venue: ` Seminar Room 2 `,
            description:``
        },
        {
            title: `TBA`,
            speaker: `Nishant Ravi, Indian School of Business`,
            datetime: `11:30 AM, 24 January, 2024`,
            venue: ` Seminar Room 2 `,
            description:``
        },

        {
            title: `Climate change and human capital: Evidence from the Indian Census`,
            speaker: `Vis Taraz (Smith College)`,
            datetime: `11:30 AM, 21 February, 2025`,
            venue: ` Seminar Room 2 `,
            description:`A growing literature documents that heat exposure has adverse impacts on cognition, student learning and academic performance. An open question is whether these short-term adverse effects of heat on human capital are transient or persistent in the longer term. In this paper, we use Indian Census data for cohorts born between 1952 and 1991 to examine how rising temperatures under climate change impact human capital accumulation. We find that higher cumulative exposure to heat during schooling years lowers the probability of completing primary, middle and secondary schooling. A long-difference model yields similar - though imprecisely estimated - effects that are not statistically distinguishable from effects in the short term.`
        },
    ],
    altText:`There are no upcoming seminars. Please check again later.`
}