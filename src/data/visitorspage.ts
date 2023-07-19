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
    title:`Visiting Faculty Profile`,
    facultyLists:[
        {
            subtitle:``,
            faculty:[
                {
                    name:`Neha Bailwal`,
                    paragraphs:[
                        {
                            text:`
                            Dates: 01 Aug - 30 Nov, 2023<br>
                            PhD, Indian Institute of Technology, Delhi<br>
                                  Area: development economics, education, social mobility, public good provision`
                        }
                    ]
                },
                {
                    name:`Wilima Wadhwa`,
                    paragraphs:[
                        {
                            text:`
                            Dates: 01 Aug - 30 Nov, 2023<br>
                            PhD, University of California, Irvine<br>
                            Area: development economics, economics of education, survey methodology`
                        }
                    ]
                },
                {
                    name:`Abhinash Borah`,
                    paragraphs:[
                        {
                            text:`
                            Visiting from: Ashoka University<br>
                            Dates: 01 Aug - 30 Nov, 2023<br>
                            PhD, University of Pennsylvania<br>
                            Area: decision theory, economic theory, behavioral economics, political economy, public economics, welfare economics`
                        }
                    ]
                },

                {
                    name:`Sanket Patil`,
                    paragraphs:[
                        {
                            text:`
                            Visiting from: Indian Institute of Management, Bangalore<br>
                            Dates: 16 Nov - 14 Dec, 2023<br>
                            PhD, Northwestern University<br>
                            Area: economic theory, behavioral economics`
                        }
                    ]
                },

                {
                    name:`Sonal Yadav`,
                    paragraphs:[
                        {
                            text:`
                            Visitng from: Umea University, Sweden<br>
                            Dates: 25 June - 25 Aug<br>
                            PhD, Indian Statistical Institute, Delhi<br>
                            Area: matching theory, mechanism design`
                        }
                    ]
                },
                {
                    name:`Bhanu Gupta`,
                    paragraphs:[
                        {
                            text:`
                            Visiting from: Ashoka University<br>
                            Dates: 12 June - 31 Aug, 2023 <br>
                            PhD, University of Michigan<br>
                            Area: public finance, development economics`
                        }
                    ]
                },
                {
                    name:`Mohammad Arshad`,
                    paragraphs:[
                        {
                            text:`
                            Visiting from: Indian Institute of Technology, Kanpur<br>
                            Dates: 24 Sep - 30 Sep, 2023<br>
                            PhD, University of California, Riverside<br>
                            Area: Bayesian Econometrics, Econometrics`
                        }
                    ]
                }
            ]
        }
    ]
}