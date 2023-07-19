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
                    { text: `The 2023 ACEGD conference will be in December: watch this space
                    for announcement. The 2022 ACEGD conference website is <a href="https://www.isid.ac.in/~epu/acegd2022/">here</a>.` }
                ]
            }
        ]
    }
]