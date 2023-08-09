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
                title: `Assistant Professor`,
                paragraphs: [
                 { text: `We are hiring Assistant Professors, particularly from the reserved category. There is a 
                 rolling advertisement: [<a href="https://www.isical.ac.in/sites/default/files/jobs/Faculty%20Recruitment%20Advertisement%202022.pdf"> Advertisement</a>]
                 Apply using the link.`}   
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
                    { text: `Submit your best papers on growth and development to ACEGD: 2023 ACEGD conference website is <a href="https://www.isid.ac.in/~acegd/acegd2023/">here</a>.` }
                ]
            }
        ]
    }
]