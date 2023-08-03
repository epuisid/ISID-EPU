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
            title: `Follow the Crowd: But Who Follows, Who Counteracts, and Which Crowd?`,
            speaker: `Moses Shayo, Hebrew University of Jerusalem`,
            datetime: ` 04 August 2023, 11:30 AM `,
            venue: ` Seminar Room 2 `,
            description:`Abstract: We study social learning, conformity, and differentiation within and across groups (Scots and English in the UK; political blocs in Israel). Our experiments cross-randomize observed ingroup and outgroup norms in several domains. Results show that, overall, individuals follow their ingroup much more than they follow their outgroup. Behavior varies systematically across individuals: those who strongly identify with their group not only follow ingroup norms more, but often choose the opposite of observed outgroup norms. Such counteracting seems to rest on intergroup animosity and on ingroup-biased perceptions of others' knowledge. Thus, when identities diverge, the same information can have contradictory effects.`
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