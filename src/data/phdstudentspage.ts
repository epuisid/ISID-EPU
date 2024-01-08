import { PersonSpec } from "./facultypage";
import { miscRoutes } from "./miscroutes";
import { paraSpec } from "./rtl.utils";

export interface PhdStudentsSpec {
    title: string;
    subtitlePastPhDStudents: string;
    linkToPastPhDStudents: paraSpec;
    subtitleCurrentPhDStudents: string;
    phdStudents: PersonSpec[];
}
export const PhDStudentsData: PhdStudentsSpec = {
    title: `PhD Students`,
    subtitlePastPhDStudents: `Profile of Past PhD Students:`,
    linkToPastPhDStudents: {
        text:`You can find our
        <a href="misc/pastphdstudents">
        past phd students here.
        </a>`
    },
    subtitleCurrentPhDStudents: `Current PhD Students:`,
    phdStudents: [
        {
            image: `assets/people/aa.jpg`,
            description: `Area: health, education, environmental economics<br>
                                Advisor: Abhiroop Mukhopadhyay`,
            name: `Akanksha Aggarwal`
        },
        {
            image: `assets/people/saarthak.jpg`,
            description: `Area: political economy, environmental economics, institutions, economics of climate change`,
            name: `Saarthak Anand`
        },
        {
            image: `assets/people/ob.jpg`,
            description: `Area: macroeconomics, public economics, development economics <br>
            Advisor: Chetan Ghate`,
            name: `Ojasvita Bahl `
        },
        {
            image: `assets/people/bb.jpg`,
            description: `Area: behavioral economics, decision theory, mechanism design <br>
            Advisor: Debasis Mishra`,
            name: `Bhavook Bhardwaj (Thesis submitted)`
        },
        {
            image: `assets/people/hd.jpg`,
            description: `Area: decision theory, mechanism design<br>
            Advisor: Debasis Mishra`,
            name: `Harshika Dalakoti (Thesis submitted)`
        },
        {
            image: `assets/people/priyanka.jpg`,
            description: `Area: industrial organization, development economics, environmental economics<br>
            Advisor: Tridip Ray`,
            name: `Priyanka Dutta `
        },
        {
            image: `assets/people/akhil.jpg`,
            description: `Area: <br>
            Advisor: `,
            name: `Akhil Kumar Goyal `
        },
        {
            image: `assets/people/ag.jpg`,
            description: `Area: microeconomic theory<br>
            Advisor: Arunava Sen`,
            name: `Amit Kumar Goyal `
        },
        {
            image: `assets/people/subhadeep.jpg`,
            description: `Area: monetary economics, economic growth, macroeconomics<br>
            Advisor: Chetan Ghate`,
            name: `Subhadeep Halder `
        },
        {
            image: `assets/people/chakshu.jpg`,
            description: `Area: Open macroeconomics, public economics<br>
            Advisor: Monisankar Bishnu`,
            name: `Chakshu Jain`
        },
        {
            image: `assets/people/nj.jpg`,
            description: `Area: industrial organization<br>
Advisor: Prabal Roy Chowdhury
            `,
            name: `Nilesh Jain `
        },
        {
            image: `assets/people/ok.jpg`,
            description: `Area: behavioral economics, networks, game theory <br>
            Advisor: Debasis Mishra`,
            name: `Ojasvi Khare `
        },
        {
            image: `assets/people/lk.jpg`,
            description: `Area: public finance, social security <br>
            Advisor: Monisankar Bishnu`,
            name: `Leena Kumar `
        },
        {
            image: `assets/people/pankaj.jpg`,
            description: `Area: environmental economics, economics of climate change, development economics<br>
            Advisor: Kanishka Kacker`,
            name: `Pankaj Kumar `
        },
        {
            image: `assets/people/prk.jpg`,
            description: `Area: environmental economics, rural economy, political economy <br>
Advisor: E. Somanathan
            Web: <a href="https://sites.google.com/view/kumar-praveen/home">Click</a>`,
            name: `Praveen Kumar `
        },
        
        {
            image: `assets/people/ria.jpg`,
            description: `Area: game theory, asymmetric information, behavioral economics<br>
            Advisor: Prabal Roy Chowdhury`,
            name: `Ria Mongia `
        },
        {
            image: `assets/people/sm.jpg`,
            description: `Area: financial development, finance <br>
            Advisor: Kanishka Kacker`,
            name: `Somroop Mukherjee `
        },
        {
            image: `assets/people/mm.jpg`,
            description: `Area: platform markets, empirical industrial organization <br>
            Advisor: Prabal Roy Chowdhury`,
            name: `Mayank Mundra `
        },
        {
            image: `assets/people/an.jpg`,
            description: `Area: auction theory, mechanism design <br>
            Advisor: Debasis Mishra`,
            name: `Adarsh Nayal `
        },
        
        {
            image: `assets/people/vr.jpg`,
            description: `Area: macroeconomics, public economics <br>
            Advisor: Monisankar Bishnu`,
            name: `Vishal Rai `
        },
        {
            image: `assets/people/ravinder.jpg`,
            description: `Area: development economics, labor economics, economics of education<br>
            Advisor: Abhiroop Mukhopadhyay`,
            name: `Ravinder`
        },
        {
            image: `assets/people/as.jpg`,
            description: `Area: auction theory, mechanism design <br>
            Advisor: Debasis Mishra`,
            name: `Anushree Saha `
        },
        {
            image: `assets/people/ans.jpg`,
            description: `Area: matching theory, mechanism design, game theory <br>
            Advisor: Arunava Sen`,
            name: `Ankit Singh `
        },
        
        {
            image: `assets/people/agnij.jpg`,
            description: `Area: environmental economics, economics of climate change, development economics <br>
            Advisor: E. Somanathan`,
            name: `Agnij Sur`
        },
        {
            image: `assets/people/vilok.jpg`,
            description: `Area: microeconomic theory <br>
            Advisor: Debasis Mishra`,
            name: `Vilok Jitendra Taori`
        },
    ]
}