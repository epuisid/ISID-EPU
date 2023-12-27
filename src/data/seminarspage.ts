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
            title: `Putting all Eggs in One Basket: Insights from a Correlation 
            Inequality`,
            speaker: `Siddhartha Sahi, Rutgers University,`,
            datetime: `29 December 2023, 3:30 PM`,
            venue: ` Seminar Room 2 `,
            description:`Abstract: We give examples of phenomena, drawn from diverse contexts 
            (military attacks on an enemy’s communication networks, vote for a 
            corporate merger, stochastic production with uncertainty in the supply 
            of inputs) when it is beneficial to concentrate rather than to diversify 
            risk, by “putting all eggs in one basket”. They can all be cast in a 
            game-theoretic framework and then their analysis lends itself to a dual 
            interpretation: as optimal strategies of a single player (the 
            “principal”) or, equivalently, as dominant strategies in a 
            non-cooperative game with multiple players (the “agents”). In the 
            process, we establish an inequality which implies the well-known Harris 
            Inequality that plays an important role in percolation theory and in the 
            Erdos-Renyi theory of random graphs.`
        },
    ],
    altText:`There are no upcoming seminars. Please check again later.`
}