import { paraSpec } from "./rtl.utils";

export interface acegdSpec{
    title:string;
    paragraphs:paraSpec[]
}
export const ACEGDData:acegdSpec = {
    title:`Annual Conference`,
    paragraphs:[
        {
            text:`EPU organizes an <strong>annual conference on economic growth and development (ACEGD)</strong> every year. ACEGD is considered a top conference in growth and development with over 300 participants every year.`
        },
        {
            text:`<strong>The 2022 ACEGD conference</strong> website is <a href="https://www.isid.ac.in/~epu/acegd2022/">here</a>. Please submit your paper.<br><br>
            For past ACEGD conferences, see <a href="https://www.isid.ac.in/~epu/acegd2022/past-conferences.html"> here</a>`
        }
    ]
}