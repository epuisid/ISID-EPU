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
                title: `No official hiring at this point`,
                paragraphs: [
                 { text: `There is a special drive to hire in economics in Delhi center of ISI. The hiring is in all positions and the deadline is 31st October 2024: <a href="https://www.isical.ac.in/sites/default/files/jobs/Faculty%20Recruitment%20Advertisement%20-%202024.pdf">Advertisement</a>`}   
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
                    { text: `Submit your best papers on growth and development to ACEGD: 2024 ACEGD conference website is <a href="https://www.isid.ac.in/~acegd/acegd2024/">here</a>.` }
                ]
            }
        ]
    }
]