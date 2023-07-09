import { PersonsData, personsSpec } from "./personspage";

export interface PersonSpec {
    imageLink?: string;
    image: string;
    name: string;
    description: string;
    personPageKey?:string;
}

export interface facultyPageSpecs{
    title:string;
    subtitleForProfs:string;
    professors:PersonSpec[];
    subtitleForStaff:string;
    staff:PersonSpec[];
    
}
export function getSummarizedFacultyList(data:personsSpec):PersonSpec[]{
    let summarizedFaculty:PersonSpec[] = Object.keys(data).map((key:string)=>({
        name:data[key].name,
        description:data[key].title,
        image:data[key].image,
        personPageKey:key
    }));
    summarizedFaculty.sort((person1,person2)=>{
        let nameParts1 = person1.name.split(' ');
        let nameParts2 = person2.name.split(' ');
        let lastName1 = nameParts1[nameParts1.length-1];
        let lastName2 = nameParts2[nameParts2.length-1];
        return lastName1.localeCompare(lastName2)
    })
    return summarizedFaculty;
}
export const facultyPageData:facultyPageSpecs = {
    title:`Faculty and Staff`,
    subtitleForProfs:`Economics and Planning Unit Faculty Profile`,
    professors:getSummarizedFacultyList(PersonsData),
    subtitleForStaff:`Economics and Planning Unit Staff`,
    staff:[
        {
            image:`assets/people/athisi.jpg`,
            imageLink:`https://www.sciencedirect.com/science/article/pii/S0305750X18302018#!`,
            name:`Athissi Kayina`,
            description:`Research Scientist, EPU <br>
            <a href="https://sites.google.com/site/athisikayina/">Webpage</a>`
        },
        {
            image:`assets/people/ravi.jpg`,
            name:`Ravi`,
            description:`Secretary, EPU`
        }
    ]
}