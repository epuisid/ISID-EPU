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
            venue: ` Classroom 13 `,
            description:`Abstract: In many games of interest (e.g., trade, entry, leadership, warfare, and partnership environments), one player (the leader) covertly acquires information about the state of Nature before choosing whether to engage with another player (the follower). The friendliness of the follower’s reaction depends on his beliefs about what motivated the leader’s choice to engage. We provide necessary and sufficient conditions for the leader’s value of acquiring more information to increase with the follower’s expectations. We then derive the economic implications of this characterization, focusing on three closely related topics (expectation traps, disclosure, and cognitive styles), and drawing policy implications. <br><br>
            
            Paper (with Jean Tirole): [<a href="https://faculty.wcas.northwestern.edu/apa522/Lemons.pdf">Download</a>]`
        },
        {
            title: `Opponent's foresight and optimal choices`,
            speaker: `Jeevant Rampal, Indian Institute of Management, Ahmedabad`,
            datetime: ` 20 October 2023, 11:30 AM `,
            venue: ` Seminar Room 2 `,
            description:`Abstract: Using two experiments, this paper demonstrates that expert players of sequential-move games best respond to their opponents' backward-induction ability. In particular, I show that these experts take advantage of inexperienced opponents' weakness in backward induction. I find this when the expert is explicitly told that her opponent is inexperienced, but also when she infers the opponent's weakness from the opponent's preceding performance. I demonstrate that other-regarding preferences have no role in these findings. I find that a novel model of limited foresight and uncertainty about the opponent’s foresight fits the data better than Level-k or Quantal Response models.`
        },
        {
            title: `Persistence in physicians’ locations: Long-run evidence from decentralised loan repayment programs`,
            speaker: `Anomita Ghosh, University of Illinois, Urbana-Champaign`,
            datetime: `03 November 2023, 11:30 AM `,
            venue: ` Seminar Room 2 `,
            description:`Abstract: Do temporary labor supply programs cause physicians to move to and stay in undesirable areas? To what extent do these programs improve the health of the vulnerable population in those areas? I investigate these questions by studying state and local loan repayment programs for new eligible physicians which were rolled out over the last four decades in hundreds of counties across US states. Leveraging a new longitudinal dataset that tracks all physicians from medical school to mid-career, and exploiting both space and time variation, I find that these policies increase the number of physicians by 5% in treated counties relative to untreated counties in the state. The inflows of physicians are driven by higher paying eligible specialties. The programs continue to influence physicians' location decisions even after they end -- effects persist for at least ten years after the minimum obligation period. Furthermore, the programs modestly spur trainees to enter eligible specialties in treated states by substituting away from ineligible specialties. Treated counties also see the elderly increase their visits to physicians while reducing those to the emergency rooms. Using patient level data from California, I demonstrate these results are not driven by selective admission of patients to treated hospitals. Overall, my findings emphasize the importance of policies that reduce financial frictions for highly skilled professionals in shaping not only their migration and labor market trajectories, but also the health outcomes of people in their communities.  A welfare analysis of these programs suggests that every dollar of government spending produces a net of around $0.6 in benefits to both recipients and non-recipients.`
        },
    ],
    altText:`There are no upcoming seminars. Please check again later.`
}