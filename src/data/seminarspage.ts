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
            title: `Knowing your lemon before you dump it`,
            speaker: `Alessandro Pavan, Northwestern University`,
            datetime: ` 13 October 2023, 11:30 AM `,
            venue: ` Seminar Room 2 `,
            description:`In many games of interest (e.g., trade, entry, leadership, warfare, and partnership environments), one player (the leader) covertly acquires information about the state of Nature before choosing whether to engage with another player (the follower). The friendliness of the follower’s reaction depends on his beliefs about what motivated the leader’s choice to engage. We provide necessary and sufficient conditions for the leader’s value of acquiring more information to increase with the follower’s expectations. We then derive the economic implications of this characterization, focusing on three closely related topics (expectation traps, disclosure, and cognitive styles), and drawing policy implications.`
        },
        {
            title: `Opponent's foresight and optimal choices`,
            speaker: `Jeevant Rampal, Indian Institute of Management, Ahmedabad`,
            datetime: ` 20 October 2023, 11:30 AM `,
            venue: ` Seminar Room 2 `,
            description:`Abstract: Using two experiments, this paper demonstrates that expert players of sequential-move games best respond to their opponents' backward-induction ability. In particular, I show that these experts take advantage of inexperienced opponents' weakness in backward induction. I find this when the expert is explicitly told that her opponent is inexperienced, but also when she infers the opponent's weakness from the opponent's preceding performance. I demonstrate that other-regarding preferences have no role in these findings. I find that a novel model of limited foresight and uncertainty about the opponent’s foresight fits the data better than Level-k or Quantal Response models.`
        },
    ],
    altText:`There are no upcoming seminars. Please check again later.`
}