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
            title: `Sovereign Credit Ratings: The Role of Past vs. Future Fiscal Performance`,
            speaker: `Prachi Mishra, Ashoka University`,
            datetime: `11:30 AM, 06 December, 2024`,
            venue: ` Seminar Room 2 `,
            description:`This paper examines drivers of sovereign credit ratings, focusing on the relative weights assigned to past debt ratios and future fiscal balance forecasts by major credit rating agencies. We develop and calibrate a simple theoretical model to assess what the relative weights on the two should be, and how they should vary with macroeconomic conditions, particularly the interest-growth differential. Using a comprehensive dataset encompassing ratings from three leading agencies across 134 countries (37 advanced economies and 97 emerging and developing economies) from 1990 to 2023, we estimate the relative importance of historical debt levels versus projected fiscal positions. Our findings indicate that rating agencies incorporate both accumulated debt burdens and future fiscal balances in their assessments. Quantitatively, we find that a 10 percentage point increase in the debt-to-GDP ratio over time in a given country requires a compensating improvement in the annual fiscal surplus of 6-9 percentage points of GDP to maintain a constant rating, other things equal. This required increase is significantly steeper than suggested by our theoretical model, which places a higher weight on future fiscal balances.
            
            We also document an increasing stringency in ratings over time, and heightened sensitivity to debt levels, particularly for advanced economies. Second, we also find evidence that agencies penalize fiscal underperformance: countries whose realized fiscal balances fall below their forecasted levels receive less favorable ratings, particularly when the underperformance is repeated.
            
            These findings lead to two potential alternative conclusions.  The first is that the rating agencies would more fully capture the risk of sovereign default by putting more weight on forecasts of future fiscal balances.  The second is that their underweight of future forecasts may reflect that these forecasts are noisy.  Our data set allows us to look at the reliability of these forecasts.  This is what we are currently doing.`
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