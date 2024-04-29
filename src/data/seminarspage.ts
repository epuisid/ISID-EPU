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
            title: `Multi-source labour statistics.  Mixture of Hidden Markov Models and Machine learning tools`,
            speaker: `Roberta Varriale, Sapienza University of Rome`,
            datetime: `03 May 2024, 11:30 AM`,
            venue: ` Seminar Room 2 `,
            description:`Abstract: In recent decades, national statistical institutes in Europe have started to produce official statistics using multiple sources of information rather than a single source, usually a statistical survey.
            We show how latent variable models can be used for employment statistics in Italy using survey and administrative data, taking into account the shortcomings of the measurement process and the longitudinal structure of the data. To this end, we use a mixture of hidden Markov models, a longitudinal extension of latent class analysis. 
            We also show how machine learning methods can be used to predict individual occupational status. This approach is based on the application of decision tree and random forest techniques, which are often used to classify large amounts of data. `
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