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
            title: `Timing of the tie-breaker`,
            speaker: `Amit Goyal, ISI, Delhi`,
            datetime: `09 February 2024, 11:30 AM`,
            venue: ` Seminar Room 2 `,
            description:`Abstract: This paper studies the optimal timing of the tie-breaker in a 2-player game where the players have the opportunity to invest effort in improving their chances of winning and the winner is determined by a fair coin toss in case of a tie. We show that the optimal timing of the tie-breaker depends on the strength of the players. Specifically, if both players are strong enough, it may be optimal to hold the tie-breaker after the match to maximize the sum of the efforts invested by both players. However, if players are not strong enough, it is optimal to hold the tie-breaker before the match as that would lead to more overall effort. We present a simple model to demonstrate these findings and derive the equilibrium strategies and payoffs for both scenarios. Our results provide insights into the optimal timing of tie-breakers in 2-player games, with implications for sports tournaments and other competitive settings.`
        },

        {
            title: `Incontestable Mechanisms`,
            speaker: `Inacio Bo, University of Macau`,
            datetime: `13 February 2024, 2:30 PM (Tuesday)`,
            venue: ` Seminar Room 2 `,
            description:`Abstract: In some allocation problems, there is a priority ordering of agents that must be respected in the matching that is produced, in that an agent cannot have revealed to prefer the assignment given to another agent with lower priority. Otherwise, the affected agent could “contest” the assignment, often legally. Mechanisms that never produce assignments that can be contested are Incontestable Mechanisms. While serial dictatorship is the unique Incontestable direct mechanism, coarser message spaces allow for a wider space of mechanisms. We provide characterizations of incontestable mechanisms for different restrictions on message spaces, evaluate incentives induced by these mechanisms and apply these concepts to a real-life application: the Indian Civil Service allocation.`
        },
        
        {
            title: `TBA`,
            speaker: `Aditya Kuvalekar, University of Essex`,
            datetime: `16 February 2024, 11:30 AM`,
            venue: ` Seminar Room 2 `,
            description:`Abstract: TBA`
        },

        {
            title: `TBA`,
            speaker: `Srinivas Arigapudi, IIT, Kanpur`,
            datetime: `01 March 2024, 11:30 AM`,
            venue: ` Seminar Room 2 `,
            description:`Abstract: TBA`
        },

        {
            title: `Seemingly informative matching mechanisms`,
            speaker: `Dinko Dimitrov, Saarland University`,
            datetime: `08 March 2024, 11:30 AM`,
            venue: ` Seminar Room 2 `,
            description:`Abstract: We consider a model where market participants can observe the identity of the agents they can be matched with but not their types. A mechanism generates a matching and an announcement at each reported type profile. We start by providing a stability notion for matching states and fully characterize (for the case of one-sided incomplete information) the set of matching states which are both minimally informative and stable. The developed stability notion is then incorporated in the definition of ex-post incentive compatible mechanisms and it is shown that not every mechanism generating the assortative matching at each reported type profile is ex-post incentive compatible. We introduce the class of seemingly informative assortative matching mechanisms allowing for specific (public or private) announcements and prove our first main result showing that every such mechanism is ex-post incentive compatible. We further allow for the possibility that different agents submit the same report, suitably modify the notion of an assortative matching mechanism, and provide our second main result stating that every such modified mechanism is ex-post incentive compatible. We finally show that seemingly informative matching mechanisms might become manipulable when incompleteness of information applies to both market sides.`
        },

        {
            title: `Global Food Prices, Local Frictions and Air Pollution`,
            speaker: `Digvijay Singh Negi, IGIDR`,
            datetime: `15 March 2024, 11:30 AM`,
            venue: ` Seminar Room 2 `,
            description:`Abstract: Can policies that distort market incentives result in negative externalities with large and widespread social costs? I uncover a robust relationship between global rice prices and air pollution in India. I establish that this link comes about due to higher global rice prices leading to increased agricultural fire activity in states where the government is the largest buyer of rice. In terms of mechanisms, I observe higher global prices leading to specialization in rice cultivation in states with higher government interference but not necessarily suitable for rice cultivation. Market distortion in the form of a pre-announced national price floor supported by government procurement of surplus rice delinks local prices from local productivity shocks and links them with global price movements. This is striking, given that India’s agricultural price policy intends to insulate farmers from global price volatility.`
        },

        
        {
            title: `Adapting to Flood Risk: Evidence from a Global Panel of Cities`,
            speaker: `Vaidehi Tandel, University of Manchester`,
            datetime: `22 March, 2024, 11:30 AM`,
            venue: ` Seminar Room 2 `,
            description:`Abstract: Urban flooding poses danger to people and places. People can adapt to this risk by moving to safer areas or by investing in private self-protection. Places can offset some of the risk through urban planning and infrastructure investment. By constructing a global city data set that covers the years 2012 to 2018, we test several flood risk adaptation hypotheses. Population growth is lower in cities that suffer from more floods. Richer cities suffer fewer deaths from flood events. Over time, the death toll from floods is declining. Cities protected by dams experience faster population growth. Using lights at night to measure short run urban economic dynamics, we document that floods cause less damage to richer cities and cities with protective dams. Cities with more past experience with floods suffer less from flooding.`
        },
        {
            title: `Are the Effects of Climate Change on Agriculture Underestimated? A Disaggregated Analysis for India`,
            speaker: `Shreekant Gupta, Delhi School of Economics`,
            datetime: `05 April 2024, 11:30 AM`,
            venue: ` Seminar Room 2 `,
            description:`Abstract: An extensive and growing body of literature on the consequences of climate change for agriculture provides a diverse array of estimated effects. This paper contends documented effects of climate change in the literature are underestimated for three reasons: the use of static specifications, the neglect or inadequate treatment of intra-year variability in key climate change variables, and the asymmetric impact of positive and negative climate shocks. We illustrate this underestimation by presenting a case study focused on the Indian agricultural sector. Through addressing these sources of underestimation our results indicate large long-run impacts of rainfall and temperature anomalies on yields for a range of food and non-food crops.`
        },

        {
            title: `Racialized urban spaces and environmental injustice using high resolution paired data`,
            speaker: `Deepak Malghan, IIM, Bangalore`,
            datetime: `12 April 2024, 11:30 AM`,
            venue: ` Seminar Room 2 `,
            description:`Abstract: A large body of research has documented urban environmental inequalities around the world, but the nature of their association with a racialized social order remains open. Pairing spatially explicit demographic census micro-data from one of the world’s leading urbanization hotspots (Bengaluru, India) with high-resolution satellite imagery, we describe novel multi-scalar residential segregation channels, including intra-street micro-segregation. We use data from ≈ 1.75 million households located in more than 15,000 neighborhoods containing the Jirst-ever spatially explicit coding of India’s elementary caste categories (jatis). The spatially marginalized groups in India — Dalits (the formerly “untouchable” castes) and Muslims — live in the densest neighborhoods that are closest to stationary sources of air pollution, experience the greatest urban heat island effects, and have the least access to mitigating green spaces. The differences between environmental outcomes for dominant and marginalized groups span 0.6–1.7 standard deviations. Accounting for multi-scalar residential segregation enables us to empirically distinguish between intergroup collective action problems that inhibit citizen mobilization and institutional discrimination. We use this distinction to show why racialized hierarchies, rather than mere ethnic diversity, explain the observed inequality in access to environmental public goods. Racialized environmental injustice pathways remain robust even after incorporating high-dimensional Jixed effects and controlling for household income and spatial correlations.`
        },
    ],
    altText:`There are no upcoming seminars. Please check again later.`
}