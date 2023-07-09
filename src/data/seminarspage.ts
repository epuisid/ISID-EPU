import { miscRoutes } from "./miscroutes";
import { paraSpec } from "./rtl.utils";

export interface seminarPageSpec{
    title:string;
    paragraphs:paraSpec[]
    upcomingSeminarsTitle:string;
    upcomingSeminars:paraSpec[]    
    altText:string;
}

export const SeminarPageData:seminarPageSpec = {
    title:`Upcoming Seminars`,
    paragraphs:[
        {
            text:`Please register for the seminar in order to receive invitations, by clicking the link below:
            <br>
            <br>
            <a href="https://forms.gle/prEBGTYj5Ctdzd2i9" class="button"><b>Webinar registration</b></a>
            <br>
            <br>
            For questions, please contact our seminar coordinator <strong> Debasis Mishra</strong> at <em>dmishra [at] isid.ac.in</em>.
            Our past webinars (some with recordings) have been archived here:`,
            image:`assets/campus/Seminar2.jpg`,
            reverse:true
        },
        {
            internalLink:miscRoutes["pastSeminars"],
        },
    ],
    upcomingSeminarsTitle:`Upcoming Seminars`,
    upcomingSeminars:[
        {
            text:`	Title: <b>A well-targeted interest rate policy</b> <br>
            Speaker: <b>Gurbachan Singh, (Visiting Professor) Ashoka University</b><br>
            Date and Time: <b> 12 May 2023, 11:30 AM </b><br>
            Venue: <b> Seminar Room-2 </b><br>
                Abstract: <b> The central bank faces a trade-off while using its interest rate
        policy for the purpose of macroeconomic stability. So, the policy is
        not very effective. Also, the prevailing interest rate policy includes
        a quasi tax-subsidy scheme. In, say, a recession when the central bank
        lowers the interest rate, it gives a quasi subsidy to borrowers and it
        imposes a quasi tax on savers. So, the policy is redistributive. Also,
        the changes in interest rates affect asset prices. So, ceteris
        paribus, prevailing policy has adverse side-effects for asset price
        stability. This can, in turn, affect banking stability as well (e.g.
        the Silicon Valley Bank case in the US). So, the prevailing policy is
        also blunt besides being non-transparent. Is it possible to move
        towards an alternative interest rate policy that is effective,
        transparent and well-targeted? Yes. </b>`
        }
    ],
    altText:`There are no upcoming seminars. Please check again later.`
}