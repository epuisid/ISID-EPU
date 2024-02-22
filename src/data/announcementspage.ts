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
                 { text: `If you are interested in applying to EPU, please send an email to abhiroop [at] isid.ac.in. EPU is always looking for candidates in all fields of economics (we are looking for reserved category and female candidates in particular)`}   
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