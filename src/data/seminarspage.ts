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
            title: `Soil Endowments and Intra-Household Distribution of Consumption in India: A Structural Approach`,
            speaker: `Bipasha Maity, Ashoka University`,
            datetime: `11:30 AM, 29 November, 2024`,
            venue: ` Seminar Room 2 `,
            description:`Using the collective household model framework and a recent structural estimation methodology, we estimate how intra-household resource shares of individual members in India vary by exogenously varying soil texture. In general we find that relative to men, women and children have substantially lower access to consumption resources within Indian households. However, gender gap in resource shares and consequently relative female poverty is found to be substantially lower in households in clayey relative to loamy soil regions. Despite widespread prevalence of child poverty across soil textures, children’s resource shares are also found to be modestly higher in clayey soil regions. As clayey soil has been associated with higher relative female employment and overall gender norms favourable to women, our findings suggest that soil texture also plays an important role in facilitating improvement of relative female bargaining power within households.`
        },

        {
            title: `TBA`,
            speaker: `Prachi Mishra, Ashoka University`,
            datetime: `11:30 AM, 06 December, 2024`,
            venue: ` Seminar Room 2 `,
            description:``
        },

        {
            title: `Matching in co-operative education programs: An experimental study`,
            speaker: `Bradley Ruffle, McMaster University`,
            datetime: `11:30 AM, 13 December, 2024`,
            venue: ` Seminar Room 2 `,
            description:`Most Canadian universities and colleges participate in co-operative education programs
whereby each year more than 80,000 co-op students alternate between dedicated for-credit work
terms and school terms. Many of these programs use a minimum sums algorithm to match students
to jobs. We show that this algorithm and all its variations may produce unstable outcomes. We
compare experimentally the properties of this algorithm and seemingly improved variations with
the deferred acceptance algorithm. While the improved versions of the minimum sums algorithm
sometimes lead to more truthful reporting of preferences and increase the likelihood of a stable
assignment, they all fare worse than the deferred acceptance algorithm. Our data reveal that the
superior outcomes associated with deferred acceptance are the result of both the algorithm itself
and the behavioral responses it elicits.`
        },

        {
            title: `TBA`,
            speaker: `Nishant Ravi, Indian School of Business`,
            datetime: `11:30 AM, 24 January, 2024`,
            venue: ` Seminar Room 2 `,
            description:``
        },

        {
            title: `TBA`,
            speaker: `Swagata Bhattacharjee (Jindal Global University)`,
            datetime: `11:30 AM, 31 January, 2025`,
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