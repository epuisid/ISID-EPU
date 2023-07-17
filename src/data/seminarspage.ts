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
    title:`Upcoming Seminars`,
    paragraphs:[
        {
            text:`Please register for the seminar in order to receive invitations, by clicking the link below:
            <br>
            <br>
            <a href="https://forms.gle/prEBGTYj5Ctdzd2i9" >Webinar registration</a>
            <br>
            <br>
            
            For questions, please contact our seminar coordinator <strong> E. Somanathan</strong> at <em>som [at] isid.ac.in</em>.
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
            title: `Doubt: Insights from a cross-cultural experiment`,
            speaker: `Subrato Banerjee, IIT Bombay`,
            datetime: ` 21 July 2023, 11:30 AM `,
            venue: ` Seminar Room 2 `,
            description:`Abstract: Through a cross-cultural experiment involving participants from Australia, India and the USA, we demonstrate that a decrease in the volume of relevant knowledge can indeed significantly increase the strength of one's opinion (as measured on the Likert scale). Our research shows that people who are less-informed can have stronger opinions than those who are more informed. We finally provide useful insights on why religious opinion is stronger than scientific opinion even on scientific matters (e.g. on the origin of the universe). Our results are robust across different cultures.`
        },
        {
            title: `Repeated Trading: Transparency and Market Structure`,
            speaker: `Santanu Roy, Southern Methodist University`,
            datetime: ` 07 August 2023, 3:30 PM `,
            venue: ` Seminar Room 2 `,
            description:`Abstract: We analyze the effect of transparency of past trading volumes in markets where an informed long-lived seller can repeatedly trade with short-lived uninformed buyers. Transparency allows buyers to observe the quantities sold in previous periods. When the market features intra-period monopsony (single buyer each period), transparency reduces welfare if the ex ante expected quality is low, but improves welfare if the expected quality is high. The effect is exactly the reverse when the market is charac- terized by intra-period competition (multiple buyers each period). This discrepancy in the efficiency implications of transparency is explained by how buyer competition affects the seller's ability to capture rents, which, in turn, influences market screening.`
        },
    ],
    altText:`There are no upcoming seminars. Please check again later.`
}