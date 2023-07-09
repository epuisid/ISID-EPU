import { textPageSpec } from "./rtl.utils";

export interface announcementspecs {
    title: string;
    list: textPageSpec[]
}
export const AnnouncementsData: announcementspecs[] = [
    {
        title: `Hiring Announcements`,
        list: [
            {
                title: `Visiting Assistant Professor`,
                paragraphs: [
                    {
                        text: `The <a href="https://www.isid.ac.in/~cecfee/">Centre for research on the Economics
of Climate, Food, Energy and Environment (CECFEE)</a>, located in the <a href="https://www.isid.ac.in/~epu">
Economics and Planning Unit (EPU)</a> at the <a href="https://www.isid.ac.in/">Indian Statistical Institute, Delhi Center
</a>, India is looking to hire a Visiting Assistant Professor.
`},
                    {
                        text: `The applicant must have a PhD in Economics with a credible research agenda in the field of labor economics,
gender and human capital. The successful applicant will engage in research under the Digital Labor
and Women’s Economic Empowerment project headed by Prof. <a href="https://www.isid.ac.in/~fafridi">Farzana Afridi</a>. 
The position, subject to funding approval, will be contractual for a period of two years. Compensation will
be at the level of an Assistant Professor taking into account relevant experience. As this
is a contractual position, compensation will be on a “all inclusive” basis.
`},
                    { text: `Come, join us for cutting edge research on India’s labor markets!` },
                    {
                        text: `If interested, email CV and JMP to cecfee[at]isid.ac.in. 
Applications will be accepted until the position is filled or cancelled. The position is subject to availability of funds.
`},
                    {
                        text: `Over the years, the Economics and Planning Unit (EPU) at the ISI, Delhi has
hired a number of PhDs at the entry level positions. Read about them
and the benefits of being at EPU, ISI Delhi <a href="vap.html">here</a>.
`}
                ]
            }
        ]
    },
    {
        title: `Event Announcements`,
        list: [
            {
                title: `ACEGD Conference`,
                paragraphs: [
                    { text: `The 2022 ACEGD conference website is <a href="https://www.isid.ac.in/~epu/acegd2022/">here</a>.` }
                ]
            }
        ]
    }
]