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
            title: `Racialized urban spaces and environmental injustice using high resolution paired data`,
            speaker: `Deepak Malghan, IIM, Bangalore`,
            datetime: `12 April 2024, 11:30 AM`,
            venue: ` Seminar Room 2 `,
            description:`Abstract: A large body of research has documented urban environmental inequalities around the world, but the nature of their association with a racialized social order remains open. Pairing spatially explicit demographic census micro-data from one of the world’s leading urbanization hotspots (Bengaluru, India) with high-resolution satellite imagery, we describe novel multi-scalar residential segregation channels, including intra-street micro-segregation. We use data from ≈ 1.75 million households located in more than 15,000 neighborhoods containing the Jirst-ever spatially explicit coding of India’s elementary caste categories (jatis). The spatially marginalized groups in India — Dalits (the formerly “untouchable” castes) and Muslims — live in the densest neighborhoods that are closest to stationary sources of air pollution, experience the greatest urban heat island effects, and have the least access to mitigating green spaces. The differences between environmental outcomes for dominant and marginalized groups span 0.6–1.7 standard deviations. Accounting for multi-scalar residential segregation enables us to empirically distinguish between intergroup collective action problems that inhibit citizen mobilization and institutional discrimination. We use this distinction to show why racialized hierarchies, rather than mere ethnic diversity, explain the observed inequality in access to environmental public goods. Racialized environmental injustice pathways remain robust even after incorporating high-dimensional Jixed effects and controlling for household income and spatial correlations.`
        },
        {
            title: `Are the Effects of Climate Change on Agriculture Underestimated? A Disaggregated Analysis for India`,
            speaker: `Shreekant Gupta, Delhi School of Economics`,
            datetime: `19 April 2024, 11:30 AM`,
            venue: ` Seminar Room 2 `,
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