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
            title: `Empower to Prosper: Women Working for Growth`,
            speaker: `Jonah Matthew Rexer (World Bank)`,
            datetime: `4:00 PM, 14 October, 2024 (Note: Monday)`,
            venue: ` Seminar Room 2 `,
            description: `Over the past three decades, South Asia has benefited from strong economic growth, accompanied by urbanization, trade liberalization, a shift towards services sectors, and stronger legal protections for women. These changes have created opportunities for all and specifically for women. And yet, these opportunities have not been fully reaped. South Asia’s female labor force participation today remains among the lowest in the world: only 32 percent of working-age women in the region participate in the labor force, a rate that is in the bottom quartile among emerging market and developing economies (EMDEs). The restrictiveness of social norms and still low legal protection of women’s rights account for a large proportion of the gap in female labor force participation in South Asia vis-à-vis EMDEs. In fact, social norms barriers appear to trump markets signals as female participation is lower in cities notwithstanding the fact that gender gap in earnings are lower in cities vis-à-vis rural areas. The weak female participation rate represents a costly misallocation of resources, and raising this rate to that of men could boost per capita incomes by 13-51 percent. Besides continued support of further structural changes, a wide range of policies could help women take advantage of new opportunities to enter the workforce. These include legal reforms to improve gender equality and better implementation of existing laws, and faster job creation in the nonagricultural sector. Such measures are likely to be effective if accompanied by a shift towards social norms that are accepting of female employment.`
        },

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
    ],
    altText:`There are no upcoming seminars. Please check again later.`
}