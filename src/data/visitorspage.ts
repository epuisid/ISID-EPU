import { paraSpec } from "./rtl.utils";

export interface facultyList{
    subtitle:string;
    faculty:{
        name:string;
        paragraphs:paraSpec[];
    }[];
}
export interface visitorsPageSpec{
    title:string;
    facultyLists:facultyList[]
}
export const VisitorsPageData:visitorsPageSpec = {
    title:`Faculty Profile`,
    facultyLists:[
        {
            subtitle:`Visiting Faculty of Economics and Planning Unit`,
            faculty:[
                {
                    name:`Piyali Das`,
                    paragraphs:[
                        {
                            text:`PhD, Indiana University<br>
                                  Area: monetary economics, applied econometrics, development economics.`
                        }
                    ]
                },
                {
                    name:`Wilima Wadhwa`,
                    paragraphs:[
                        {
                            text:`PhD, University of California, Irvine<br>
                            Area: development economics, economics of education, survey methodology`
                        }
                    ]
                },
                {
                    name:`Abhinash Borah`,
                    paragraphs:[
                        {
                            text:`PhD, University of Pennsylvania<br>
                            Area: decision theory, economic theory, behavioral economics, political economy, public economics, welfare economics`
                        }
                    ]
                }
            ]
        }
    ]
}