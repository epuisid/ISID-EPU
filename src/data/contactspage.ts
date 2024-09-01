import { textPageSpec } from "./rtl.utils";

export interface contactsPageSpec {
    title: string;
    pointsOfContact: textPageSpec[];
    address:textPageSpec[];
}
export const ContactsPageData: contactsPageSpec = {
    title: `Contacts`,
    pointsOfContact: [
        {
            title: `Head, Economics and Planning Unit: <strong>Mudit Kapoor</strong>`,
            paragraphs: [
                { text: `Room 224, Economics and Planning Unit, ISI Delhi<br>
                Phone: +91 - 11 - 4149 3929<br>
                Email: mkapoor[at] isid.ac.in` }
            ]
        },
        {
            title: `Student Affairs (Admissions):`,
            paragraphs: [
                { text: `<strong>Tridip Ray</strong > (MSQE and PhD)<br>
                Room 217(Tridip), Economics and Planning Unit, ISI Delhi<br>
                + 91 - 11 - 4149 3941(Tridip)<br>
                Email: tridip[at] isid.ac.in` }
            ]
        },
        {
            title: `Seminar Coordinator: <strong>E. Somanathan</strong>`,
            paragraphs: [
                { text: `Room 224, Economics and Planning Unit, ISI Delhi<br>
                Phone: +91 - 11 - 4149 3948<br>
                Email: som [at] isid.ac.in` }
            ]
        },
        {
            title: `Placement Cell In-Charge: <strong>Mudit Kapoor</strong>`,
            paragraphs: [
                { text: `Room 224, Economics and Planning Unit, ISI Delhi<br>
                Phone: +91 - 11 - 4149 3929<br>
                Email: mkapoor[at] isid.ac.in` }
            ]
        },
        {
            title: `Secretary: <strong>Ravi</strong>`,
            paragraphs: [
                { text: `Room 218, Economics and Planning Unit, ISI Delhi<br>
                Phone: +91 - 11 - 4149 3942<br>
                Email: pu[at] isid.ac.in<br>
                Fax: +91 - 11 - 4149 3981` }
            ]
        },
    ],
    address:[
        {
            title: `Address`,
            paragraphs: [
                {
                    text: `Economics and Planning Unit<br>
                           Indian Statistical Institute<br>
                           7, S. J. S. Sansanwal Marg<br>
                           New Delhi 110 016, India<br>
                           Phone: +91-11-4149 3942<br>
                           Fax: +91-11-4149 3981<br>
                           Email: pu [at] isid.ac.in` },
            ]
        },
        {
            title:`Map`,
            paragraphs:[
                {
                    text:`<a name="map"></a><br>
                    <iframe style="border: 0;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.4755881695387!2d77.185499!3d28.53956935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dfa88aca091%3A0xc0aceb27f695e1d8!2sISI+Delhi%2C+New+Delhi%2C+Delhi%2C+India!5e1!3m2!1sen!2s!4v1389372327376" height="450" width="100%" frameborder="0"></iframe>`
                }
            ]
        }
    ]
};