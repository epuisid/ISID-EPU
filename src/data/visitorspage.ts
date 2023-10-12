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
                    name:`Siddharth Chatterjee`,
                    paragraphs:[
                        {
                            text:`
                            Dates: 03 Aug - 30 Sept, 2023 <br>
                            PhD, Indian Statistical Institute<br>
                            Area: decision theory, microeconomic theory`
                        }
                    ]
                },

                {
                    name:`Ritesh Jain`,
                    paragraphs:[
                        {
                            text:`
                            Visiting from: University of Liverpool<br>
                            Dates: 14 Aug - 07 Sept, 2023 <br>
                            PhD, Ohio State University<br>
                            Area: implementation, mechanism design, experiments`
                        }
                    ]
                },
                {
                    name:`Mayuri Chaturvedi`,
                    paragraphs:[
                        {
                            text:`
                            Visiting from: University of Liverpool<br>
                            Dates: 22 Aug - 07 Sept, 2023 <br>
                            PhD, University of California, Irvine<br>
                            Area: development economics, public economics, economics of education`
                        }
                    ]
                },
                {
                    name:`Anand Murugesan`,
                    paragraphs:[
                        {
                            text:`
                            Visiting from: Central European University<br>
                            Dates: 27 Aug - 02 Sept, 2023 <br>
                            PhD, University of Maryland<br>
                            Area: development economics, public economics, experimental economics, political behavior`
                        }
                    ]
                },

                {
                    name:`Ridhima Gupta`,
                    paragraphs:[
                        {
                            text:`
                            Visiting from: South Asian University<br>
                            Dates: 01 Sep - 30 Sep, 2023<br>
                            PhD, Indian Statistical Institute<br>
                            Area: environmental economics, agricultural economics`
                        }
                    ]
                },

                {
                    name:`Subrato Banerjee`,
                    paragraphs:[
                        {
                            text:`
                            Visiting from: Indian Institute of Technology, Bombay<br>
                            Dates: 16 Sep - 25 Sep, 2023<br>
                            PhD, Indian Statistical Institute<br>
                            Area: behavioral economics, experimental economics`
                        }
                    ]
                },

                {
                    name:`Priyanka Kothari`,
                    paragraphs:[
                        {
                            text:`
                            Visiting from: Tata Institute of Social Sciences, Mumbai<br>
                            Dates: 16 Sep - 25 Sep, 2023<br>
                            PhD, Indian Statistical Institute<br>
                            Area: industrial organization`
                        }
                    ]
                },

                {
                    name:`Jeevant Rampal`,
                    paragraphs:[
                        {
                            text:`
                            Visiting from: Indian Institute of Management, Ahmedabad<br>
                            Dates: 25 Sep - 24 Oct, 2023<br>
                            PhD, Ohio State University<br>
                            Area: Behavioral and experimental economics, game theory, mechanism design`
                        }
                    ]
                },
                
                {
                    name:`Shurojit Chatterji`,
                    paragraphs:[
                        {
                            text:`
                            Visiting from: Singapore Management University<br>
                            Dates: 28 Sep - 05 Oct, 2023 <br>
                            PhD, Stony Brook University<br>
                            Area: mechanism design, voting, economic dynamics`
                        }
                    ]
                },

                {
                    name:`Prakarsh Singh`,
                    paragraphs:[
                        {
                            text:`
                            Visiting from: Plaksha University<br>
                            Dates: 04 Oct - 11 Oct, 2023<br>
                            PhD, London School of Economics<br>
                            Area: development economics`
                        }
                    ]
                },

                {
                    name:`Mohammad Arshad`,
                    paragraphs:[
                        {
                            text:`
                            Visiting from: Indian Institute of Technology, Kanpur<br>
                            Dates: 29 Oct - 04 Nov, 2023<br>
                            PhD, University of California, Riverside<br>
                            Area: Bayesian Econometrics, Econometrics`
                        }
                    ]
                },
                
                {
                    name:`Bharat Ramaswami`,
                    paragraphs:[
                        {
                            text:`
                            Visiting from: Ashoka University<br>
                            Dates: 01 Nov - 30 Nov, 2023<br>
                            PhD, University of Minnesota<br>
                            Area: agricultural economics, development economics`
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
                    name:`Souvik Banerjee`,
                    paragraphs:[
                        {
                            text:`
                            Visiting from: Indian Institute of Technology, Bombay<br>
                            Dates: 28 Nov - 27 Dec, 2023<br>
                            PhD, State University of New York, Albany<br>
                            Area: health economics, econometrics`
                        }
                    ]
                },

                {
                    name:`Rahul Singh`,
                    paragraphs:[
                        {
                            text:`
                            Visiting from: Ahmedabad University<br>
                            Dates: 09 Jan - 08 Feb, 2024<br>
                            PhD, Indian Institute of Management, Bangalore<br>
                            Area: international trade, empirical industrial organization`
                        }
                    ]
                },

                {
                    name:`Moumita Roy`,
                    paragraphs:[
                        {
                            text:`
                            Visiting from: Ahmedabad University<br>
                            Dates: 15 Jan - 14 Feb, 2024<br>
                            PhD, George Mason University<br>
                            Area: experimental economics, behavioral economics, labor economics`
                        }
                    ]
                }
            ]
        }
    ]
}