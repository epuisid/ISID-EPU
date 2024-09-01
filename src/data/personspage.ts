import { PersonPageComponent } from "src/app/pages/people/person-page/person-page.component";
import { dictionaryToRouteList, paraSpec } from "./rtl.utils";
export interface publication{
    title:string;
    authors:string[];
    link:string;
    publicationDetails:string;
    summary?:string;
}
export interface ProfileLinkSpec{
    site:string;
    link:string;
}
export interface personPageSpec{
    name:string;
    image:string;
    title:string;
    description:paraSpec[];
    publications:publication[]
    profileLinks:ProfileLinkSpec[]
}
export type personsSpec = {[key:string]:personPageSpec};

export const PersonsData:personsSpec = {
    arunava_sen:{
        name:`Arunava Sen`,
        image:`assets/people/asen.jpg`,
        title:`Professor Emeritus
                <br>
                PhD, Princeton University`,
        description:[
            {
                text:`Arunava Sen is a Professor Emeritus in the Economics and Planning 
                Unit of the Indian Statistical Institute (ISI), Delhi.
                <br><br>
                He received his PhD from Princeton University in 1987. He joined 
                ISI Delhi in 1988 and retired from ISI in 2024. He has been with ISI as Professor Emeritus after his retirement. 
                <br><br>
                Arunava is a recipient of the Infosys Prize in Social Science in 
                2012. He is also a fellow of the Econometric Society, an Economic 
                Theory Fellow, former member of council of Econometric Society, 
                former President of the Society for Social Choice and Welfare. He 
                is an advisory editor of Journal of Mathematical Economics, and 
                associate editor of Social Choice and Welfare, Economic Theory, 
                Review of Economic Design, and Mathematical Social Sciences.
                <br><br>
                The main areas of research of Arunava are game theory, social 
                choice theory, mechanism design, voting and auction. He teaches 
                courses on microeconomics and game theory at ISI Delhi.
                <br><br>
                On the occasion of Arunava’s 60th birthday celebrations, there was
                <a href="https://sites.google.com/view/arunava60/">
                a research conference in ISI Delhi
                </a>
                and his students and colleagues made
                <a href="https://youtu.be/IFAE50i-tbk">
                this video about him.
                </a>
                `
            },
        ],
        publications:[
            {
                title:`Local Global Equivalence in Voting Models: A Characterization and Applications`,
                authors:[
                    `Arunava Sen`,
                    `Ujjwal Kumar`,
                    `Souvik Roy`,
                    `Sonal Yadav`,
                    `Huaxia Zeng`
                ],
                publicationDetails:`Theoretical Economics, 2021`,
                link:`https://econtheory.org/ojs/index.php/te/article/viewFile/20211195/32375/914#:~:text=It%20is%20locally%20strategy%2Dproof%20if%20the%20voter%20with%20a,gain%20by%20an%20arbitrary%20misrepresentation.`
            },
            {
                title:`Matching with Partners and Projects`,
                authors:[
                    `Arunava Sen`,
                    `Antonio Nicolo`,
                    `Sonal Yadav`
                ],
                publicationDetails:`Journal of Economic Theory, 2019`,
                link:`https://www.sciencedirect.com/science/article/pii/S002205311830214X`
            },
            {
                title:`Implementation in Undominated Strategies by Bounded Mechanisms: The Pareto Correspondence and a Generalization`,
                link:`https://www.sciencedirect.com/science/article/pii/S0022053119300031`,
                authors:[
                    `Arunava Sen`,
                    `Nozumo Muto`,
                    `Eve Ramaekers`,
                    `Saptarshi Mukherjee`
                ],
                publicationDetails:`Journal of Economic Theory, 2019`
            },
            {
                title:`A Characterization of Single-Peaked Preferences via Random Social Choice Functions`,
                link:`https://econtheory.org/ojs/index.php/te/article/viewFile/1972/15472/465`,
                authors:[
                    `Arunava Sen`,
                    `Shurojit Chatterji`,
                    `Huaxia Zeng`
                ],
                publicationDetails:`Theoretical Economics, 2016`
            },
            {
                title:`Affine Maximizers with Selfish Valuations`,
                authors:[
                    `Arunava Sen`,
                    `Swaprava Nath`
                ],
                link:`https://dl.acm.org/doi/10.1145/2786014`,
                publicationDetails:`ACM Transactions in Economics and Computing, 2015`
            }
        ],
        profileLinks:[
            {
                link:`https://scholar.google.com/citations?user=iGmVaU4AAAAJ`,
                site:`Google Scholar`
            },
            {
                link:`https://en.wikipedia.org/wiki/Arunava_Sen`,
                site:`Wikipedia`
            },
            {
                link:`https://www.isid.ac.in/~asen/`,
                site:`Website`
            }
        ]
    },
    debasis_mishra:{
        name:`Debasis Mishra`,
        image:`assets/people/dm.jpg`,
        title:`Professor
                <br>
                PhD, University of Wisconsin, Madison`,
        description:[
            {
                text:`Debasis Mishra is a professor in the Economics and Planning 
                Unit of the Indian Statistical Institute (ISI), Delhi.
                <br><br>
                He received his PhD from University of Wisconsin, Madison in 
                2004. He joined ISI Delhi in 2006. Prior to that he was a 
                post-doc at Center for Operations Research and Econometrics 
                (CORE) in Louvain-la-Neuve, Belgium and Indian Institute of 
                Science, Bangalore.
                <br><br>
                Debasis is currently an advisory editor of Games and Economic 
                Behavior and an associate editor of Social Choice and Welfare. He 
                is an elected council member of Game Theory Society (2021-2027) 
                and was an elected council member of Society for Social Choice 
                and Welfare (2016-2021).
                <br><br>
                The main areas of research of Debasis are mechanism design, 
                auction theory, and social choice theory. He teaches courses on 
                game theory, mechanism design, and mathematical programming at 
                ISI Delhi.
                `
            }
        ],
        profileLinks:[
            {
                link:`https://scholar.google.co.in/citations?user=4m3BMHEAAAAJ&hl=en`,
                site:`Google Scholar`
            },
            {
                site:`Website`,
                link:`http://www.isid.ac.in/~dmishra`
            }
        ],
        publications:[
            {
                title:`Symmetric reduced form voting`,
                link:`https://econtheory.org/ojs/index.php/te/article/viewForthcomingFile/5400/36360/1`,
                authors:[
                    `Debasis Mishra`,
                    `Xu Lang`
                ],
                publicationDetails:`Theoretical Economics, 2024`
            },
            {
                title:`Strategy-proof multi-object mechanism design: Ex-post revenue maximization with non-quasilinear preferences`,
                link:`https://doi.org/10.1016/j.jet.2020.105036`,
                authors:[
                    `Debasis Mishra`,
                    `Tomoya Kazumura`,
                    `Shigehiro Serizawa`
                ],
                publicationDetails:`Journal of Economic Theory, 2020`
            },
            {
                title:`Mechanism design without quasilinearity`,
                link:`https://econtheory.org/ojs/index.php/te/article/viewForthcomingFile/2910/25081/1`,
                authors:[
                    `Debasis Mishra`,
                    `Tomoya Kazumura`,
                    `Shigehiro Serizawa`
                ],
                publicationDetails:`Theoretical Economics, 2020`
            },
            {
                title:`Balanced Ranking Mechanisms`,
                link:`http://www.sciencedirect.com/science/article/pii/S0899825617301173`,
                authors:[
                    `Debasis Mishra`,
                    `Yan Long`,
                    `Tridib Sharma`
                ],
                publicationDetails:`Games and Economic Behavior, 2017`
            },
            {
                title:`Ordinal Bayesian Incentive Compatibility in Restricted Domains`,
                link:`http://www.sciencedirect.com/science/article/pii/S0022053116300011`,
                authors:[
                    `Debasis Mishra`
                ],
                publicationDetails:`Journal of Economic Theory, 2016`
            },
        ]
    },
    esomanathan:{
        name:`E. Somanathan`,
        image:`assets/people/es.jpg`,
        title:`Professor
                <br>
                PhD, Harvard University`,
        description:[
            {
                text:`E. Somanathan is Professor in the Economics and Planning 
                Unit of the Indian Statistical Institute in Delhi. 
                <br><br>
                Som received his PhD from Harvard University and has taught at 
                Emory University, the University of Michigan, and Princeton 
                University, and been a Fellow at the Center for Advanced Study in 
                the Behavioral Sciences at Stanford University. 
                <br><br>
                Som is a fellow of and was a member of the board of BREAD (Bureau 
                for Research and Economic Analysis of Development). He founded 
                the
                <a href="https://www.isid.ac.in/~cecfee/"> 
                Center for research in the economics of Climate, Food, 
                Energy, and Environment (CECFEE)
                </a>
                at the Indian Statistical 
                Institute. He has been Executive Director of SANDEE (South Asian 
                Network for Development and Environmental Economics), a 
                Co-ordinating Lead Author for the Fifth Assessment Report of the 
                IPCC, and is a Co-Editor of the journal Environment and 
                Development Economics.
                <br><br>
                The main area of research of Som is in the economics of 
                environment and development. He teaches environmental economics 
                and history of economic thought at ISI Delhi.
                `
            }
        ],
        profileLinks:[
            {
                link:`https://scholar.google.com/citations?user=drfV8loAAAAJ&hl=en`,
                site:`Google Scholar`
            },
            {
                site:`Website`,
                link:`http:www.isid.ac.in/~som`
            }
        ],
        publications:[
            {
                title:`The Impact of Temperature on Productivity and Labor Supply: Evidence from Indian Manufacturing`,
                link:`https://doi.org/10.1086/713733`,
                authors:[
                    `E. Somanathan`,
                    `Rohini Somanathan`,
                    `Anant Sudarshan`,
                    `Meenu Tiwari`
                ],
                publicationDetails:`Journal of Political Economy (2021)`
            },
            {
                title:`A breath of fresh air: Raising awareness for clean fuel adoption`,
                link:`https://doi.org/10.1016/j.jdeveco.2021.102674`,
                authors:[
                    `E. Somanathan`,
                    `Farzana Afridi`,
                    `Sisir Debnath`
                ],
                publicationDetails:`Journal of Development Economics (2021)`
            },
            {
                title:`Value of Cleaner Neighborhoods: Application of Hedonic Price Model in Low Income Context`,
                link:`https://doi.org/10.1016/j.worlddev.2020.104965`,
                authors:[
                    `E. Somanathan`,
                    `Mani Nepal`,
                    `Rajesh K. Rai`,
                    `Madan S. Khadayat`
                ],
                publicationDetails:`World Development (2020)`
            },
            {
                title:`Does Collective Action Sequester Carbon? Evidence from the Nepal Community Forestry Program`,
                link:`https://doi.org/10.1016/j.worlddev.2017.07.030`,
                authors:[
                    `E. Somanathan`,
                    `Randall Bluffstone`,
                    `Prakash Jha`,
                    `Harisharan Luintel`,
                    `Rajesh Bista`,
                    `Michael Toman`,
                    `Naya Paudel`
                ],
                publicationDetails:`World Development (2018)`
            },
            {
                title:`Biogas: Clean energy access with low-cost mitigation of global warming`,
                link:`http://link.springer.com/article/10.1007%2Fs10640-015-9961-6#/page-1`,
                authors:[
                    `E. Somanathan`,
                    `Randall Bluffstone`
                ],
                publicationDetails:`Environmental and Resource Economics (2015)`
            },
        ]
    },
    kanishka_kracker:{
        name:`Kanishka Kacker`,
        image:`assets/people/kk.jpg`,
        title:`Assistant Professor
                <br>
                PhD, University of Maryland`,
        description:[
            {
                text:`Kanishka Kacker is an Assistant Professor in the Economics 
                and Planning Unit of the Indian Statistical Institute in Delhi. 
                <br><br>
                Kanishka received his PhD from the University of Maryland, 
                College Park in 2014. He joined ISI in 2017 as a Visiting 
                Assistant Professor. Prior to this he worked in the World Bank 
                office in Washington DC. 
                <br><br>
                He is a member of the 
                <a href="https://www.isid.ac.in/~cecfee/">
                Center for research in the economics of 
                Climate, Food, Energy, and Environment (CECFEE)
                </a>
                at ISI and the 
                INSEE network.
                <br><br>
                The main area of research for Kanishka is energy and environment, 
                with a focus on empirical methods. He teaches Statistics and 
                Applied Policy Analysis.
                `
            }
        ],
        profileLinks:[
            {
                link:`https://scholar.google.com/citations?user=UsIdSX4AAAAJ&hl=en&oi=ao`,
                site:`Google Scholar`
            },
            {
                site:`Website`,
                link:`https://kanishkakacker.wixsite.com/mysite`
            }
        ],
        publications:[
            {
                title:`Inter-regional coal mine competition in the US: Evidence from rail restrictions`,
                link:`https://www.sciencedirect.com/science/article/pii/S0140988322001700?casa_token=JHYt9PSwsa8AAAAA:JR1x1pHnxZIEzSEFk2VgZe87coDNyoL6eOM5hnc_XlyU7k59PvjIb3tsdknZ9EhIEl-SpNyujyKL`,
                authors:[
                    `Kanishka Kacker`,
                    `Ian Lange`
                ],
                publicationDetails:`2022. Energy Economics, 110, 105998`
            },
            {
                title:`Deterring Kickbacks and Encouraging Entry in Public Procurement Markets: Evidence from Firm Surveys in 88 Developing Countries`,
                link:`https://academic.oup.com/wber/article/33/2/287/5319223`,
                authors:[
                    `Kanishka Kacker`,
                    `Steve Knack`,
                    `Nataliya Biletska`
                ],
                publicationDetails:`2019. The World Bank Economic Review, 33(2), 287-309`
            },
            {
                title:`Regulation and Contract Design: The Impact of Relationship Specific Investment`,
                link:`http://onlinelibrary.wiley.com/doi/10.1111/joie.12122/full`,
                authors:[
                    `Kanishka Kacker`
                ],
                publicationDetails:`2016. Journal of Industrial Economics, Vol. 64: 656–682`
            }
        ]
    },
    farzana_afridi:{
        name:'Farzana Afridi',
        image:'assets/people/farzana.jpg',
        title:`Professor
                <br>
                PhD, University of Michigan<br>`,
        description:[
            {
                text:`Farzana Afridi is Professor in the Economics and Planning 
                Unit of the Indian Statistical Institute in Delhi. 
                <br><br>
                Farzana received her PhD from the University of Michigan (Ann 
                Arbor) and has taught at the Maxwell School of Citizenship and 
                Public Affairs at Syracuse University, Delhi School of Economics, 
                Geneva Graduate Institute and the National University of 
                Singapore. 
                <br><br>
                Farzana is a research fellow at the Institute of Labor Economics 
                (IZA, Bonn), member of the International Growth Center’s (IGC at 
                LSE-Oxford) steering group and has been the Lead Academic of the 
                IGC’s India program. She is Associate Editor of the Journal of 
                Behavioral and Experimental Economics, Oxford Open Economics and 
                serves on the editorial boards of Ideas for India (I4I), Indian 
                Journal of Labor Economics and Sarvekshna - the flagship journal 
                of India’s Ministry of Statistics and Program Implementation 
                (MOSPI). Farzana currently heads the Digital Platforms and 
                Women’s Economic Empowerment (DP-WEE) project supported by the 
                Bill and Melinda Gates Foundation.
                <br><br>
                Farzana’s main areas of research are labour and development 
                economics. She teaches econometrics and labour economics at ISI 
                Delhi.
                `
            }
        ],
        profileLinks:[
            {
                link:`https://scholar.google.com/citations?user=AuO0mNoAAAAJ&hl=en`,
                site:`Google Scholar`
            },
            {
                link:'https://www.isid.ac.in/~fafridi/',
                site:`Website`
            }
        ],
        publications:[
            {
                title:`Time for Clean Energy? Cleaner Fuels and Women’s Time in Home Production`,
                link:`https://www.isid.ac.in/~fafridi/wp-content/uploads/2022/03/LPG_and_time_use_in_India-4.pdf`,
                authors:[
                    `Farzana Afridi`,
                    `Sisir Debnath`,
                    `Taryn Dinkelman`,
                    `Komal Sareen`
                ],
                publicationDetails:`World Bank Economic Review, 2023`
            },
            {
                title:`Gender and Mechanization: Evidence from Indian Agriculture`,
                link:`https://ideas.repec.org/a/wly/ajagec/v105y2023i1p52-75.html`,
                authors:[
                    `Farzana Afridi`,
                    `Monisankar Bishnu`,
                    `Kanika Mahajan`
                ],
                publicationDetails:`American Journal of Agricultural Economics, 2023`
            },
            {
                title:`A breath of fresh air: Raising awareness for clean fuel adoption`,
                link:`https://doi.org/10.1016/j.jdeveco.2021.102674`,
                authors:[
                    `Farzana Afridi`,
                    `Sisir Debnath`,
                    `E. Somanathan`
                ],
                publicationDetails:`Journal of Development Economics, 2021`
            },
            {
                title:`Improving Learning Outcomes through Information Provision: Experimental Evidence from Indian Villages`,
                link:`https://ideas.repec.org/a/eee/deveco/v146y2020ics0304387818300269.html`,
                authors:[
                    `Farzana Afridi`,
                    `Bidisha Barooah`,
                    `Rohini Somanathan`
                ],
                publicationDetails:`Journal of Development Economics, 2020`
            },
            {
                title:`Using Social Connections and Financial Incentives to Solve Coordination Failure: A Quasi-field Experiment in India’s Manufacturing Sector`,
                link:``,//TODO,
                authors:[
                    `Farzana Afridi`,
                    `Amrita Dhillon`,
                    `Sherry Xin Li`,
                    `Swati Sharma`
                ],
                publicationDetails:`Journal of Development Economics, 2020`
            },
        ]
    },
    tridip_ray:{
        name:`Tridip Ray`,
        image:`assets/people/tridip.jpg`,
        title:`Professor
                <br>
                PhD, Cornell University`,
        description:[
            {
                text:`Tridip Ray is a Professor in the Economics and Planning 
                Unit of the Indian Statistical Institute in Delhi.
                <br><br>
                Tridip received his PhD from Cornell University and has 
                previously taught at Hong Kong University of Science and 
                Technology, where he won numerous awards for his teaching. Tridip 
                has been the main organizer of the
                <a href="https://www.isid.ac.in/~epu/acegd2022/">
                Annual Conference on Economic Growth and Developement
                </a>
                at ISI Delhi, which is regarded as one of 
                the premier conferences in development economics.
                <br><br>
                Tridip’s main areas of research are development economics, 
                inequality, economics of education, and applied microeconomics. 
                He teaches development economics and mathematical methods in 
                economics at ISI Delhi.
                `
            }
        ],
        publications:[
            {
                title:`Optimal Intergenerational Transfers: Public Education and Pensions`,
                link:`https://www.sciencedirect.com/science/article/abs/pii/S0047272721000475`,
                authors:[
                    `Tridip Ray`,
                    `Monisankar Bishnu`,
                    `Shresth Garg`,
                    `Tishara Garg`
                ],
                publicationDetails:`Journal of Public Economics, 2021`
            },
            {
                title:`Whose Education Matters? An Analysis of Inter Caste Marriages in India`,
                link:`https://www.sciencedirect.com/science/article/abs/pii/S0167268120300494`,
                authors:[
                    `Tridip Ray`,
                    `Arka Roy Chaudhuri`,
                    `Komal Sahai`
                ],
                publicationDetails:`Journal of Economic Behavior and Organization, 2020`
            },
            {
                title:`Inequality, Neighbourhoods and Welfare of the Poor`,
                link:`https://www.sciencedirect.com/science/article/abs/pii/S0304387816300190`,
                authors:[
                    `Tridip Ray`,
                    `Namrata Gulati`
                ],
                publicationDetails:`Journal of Development Economics, 2016`
            }
        ],
        profileLinks:[
            {
                link:`https://scholar.google.com/citations?user=9aPizDoAAAAJ&hl=en`,
                site:`Google Scholar`
            },
            {
                site:`Website`,
                link:`https://www.isid.ac.in/~tridip/`
            }
        ]
    },
    monisankar_bishnu:{
        name:`Monisankar Bishnu`,
        image:`assets/people/mbishnu.jpg`,
        title:`Professor
                <br>
                PhD, Iowa State University`,
        description:[
            {
                text:`Monisankar Bishnu is a Professor in the 
                Economics and Planning Unit of the Indian Statistical Institute 
                (ISI), Delhi Centre.
                <br><br>
                He received his Ph. D. from the Iowa State University. Prior to 
                joining Indian Statistical Institute, he was a Senior Lecturer at 
                the Research School of Economics of the Australian National 
                University (ANU) in Canberra, Australia. He also held visiting 
                positions at the Indian Statistical Institute and Iowa State 
                University.
                <br><br>
                Moni is also associated with the Centre for Advanced 
                macroeconomic Analysis (CAMA) at the ANU and the Australian 
                research Council (ARC) Centre of Excellence in Population Ageing 
                Research (CEPAR) at UNSW, Sydney. He is also an Associate Editor 
                of Journal of Asian Economic and Economic Modelling, and a Review 
                Editor of the interdisciplinary journal Frontiers in Political 
                Science.
                <br><br>
                His main area of research is the macroeconomic aspects of Public 
                Finance including pensions, Credit Market and Labour.`
            }
        ],
        publications:[
            {
                title:`Credit Markets with Time-Inconsistent Agents and Strategic Loan Default`,
                link:`https://onlinelibrary.wiley.com/doi/abs/10.1111/jmcb.13035`,
                authors:[
                    `Monisankar Bishnu`,
                    `Joydeep Bhattacharya`,
                    `Min Wang`
                ],
                publicationDetails:`Journal of Money, Credit, and Banking, 2023`
            },
            {
                title:`Intergenerational transfers: Public education and pensions with endogenous fertility`,
                link:`https://doi.org/10.1016/j.jedc.2023.104697`,//TODO,
                authors:[
                    `Monisankar Bishnu`,
                    `Shresth Garg`,
                    `Tishara Garg`,
                    `Tridip Ray`
                ],
                publicationDetails:`Journal of Economic Dynamics and Control, 2023`
            },
            {
                title:`What Determines Women's Labor Supply? Market Productivity, Home Productivity and Social Norms`,
                link:`https://doi.org/10.1017/dem.2022.22`,//TODO,
                authors:[
                    `Farzana Afridi`,
                    `Monisankar Bishnu`,
                    `Kanika Mahajan`
                ],
                publicationDetails:`Journal of Demographic Economics, 2023`
            },

            {
                title:`Gender and Mechanization: Evidence from Indian Agriculture`,
                link:`https://doi.org/10.1111/ajae.12315`,//TODO,
                authors:[
                    `Farzana Afridi`,
                    `Monisankar Bishnu`,
                    `Kanika Mahajan`
                ],
                publicationDetails:`American Journal of Agricultural Economics, 2023`
            },

            {
                title:`Optimal Intergenerational Transfers: Public Education and Pensions`,
                link:`https://www.sciencedirect.com/science/article/abs/pii/S0047272721000475`,
                authors:[
                    `Monisankar Bishnu`,
                    `Shresth Garg`,
                    `Tishara Garg`
                ],
                publicationDetails:`Journal of Public Economics, 2021`
            }
        ],
        profileLinks:[
            {
                link:`https://scholar.google.co.in/citations?user=UZx6SsMAAAAJ&hl=en`,
                site:`Google Scholar`
            },
            {
                site:`Website`,
                link:`https://www.isid.ac.in/~mbishnu/`
            }
        ],
    },
    abhiroop_mukhopadhyay:{
        name:`Abhiroop Mukhopadhyay`,
        image:`assets/people/am.jpg`,
        title:`Professor
                <br>
                PhD, Pennsylvania State University`,
        description:[
            {
                text:`Abhiroop Mukhopadhyay is a Professor in the Economics and 
                Planning Unit of the Indian Statistical Institute in Delhi. He is 
                the current Head of Department.
                <br><br>
                Abhiroop received his Ph.D. from the Pennsylvania State 
                University. He was a Hermes (CNRS) Post Doctoral Fellow at GREQAM 
                (Marseille) and the Sir Ratan Tata Senior Research Fellow at the 
                Institute of Economic Growth (Delhi). He joined ISI (Delhi) in 
                2004. He received the Mahalanobis Gold Medal from The Indian 
                Econometric Society in 2018. 
                <br><br>
                Abhiroop is a research fellow at the Institute of Labor Economics 
                (IZA, Bonn), an associated researcher for Centre De Sciences 
                Humaines (Delhi) and an Executive Council member of the 
                International Institute of Population Studies, Mumbai. He is a 
                member of multiple committees set up by the Ministry of Health 
                and Family Welfare and Ministry of Rural Development. He is also 
                a team member of AMIE (Association for Mentoring and Inclusion in 
                Economics) and a board member of LEHER (a child rights NGO).
                <br><br>
                Abhiroop’s main area of research is in education and labour 
                economics. He teaches econometrics and economics of education at 
                ISI Delhi.
                `
            }
        ],
        publications:[
            {
                title:`Science Education and Labor Market Outcomes in a Developing Economy`,
                link:`https://onlinelibrary.wiley.com/doi/abs/10.1111/ecin.13044`,
                authors:[
                    `Abhiroop Mukhopadhyay`,
                    `Tarun Jain`,
                    `Nishith Prakash`,
                    `Raghav Rakesh`
                ],
                publicationDetails:`Economic Inquiry, 2022`
            },
            {
                title:`Income Guarantees and Borrowing in Risky Environments: Evidence from India’s Rural Employment Guarantee Scheme`,
                link:`https://onlinelibrary.wiley.com/doi/abs/10.1111/ecca.12325`,
                authors:[
                    `Abhiroop Mukhopadhyay`,
                    `Clive Bell`
                ],
                publicationDetails:`Economica, 2020`
            },
            {
                title:`Redistributing Teachers using Local Transfers`,
                link:`https://www.sciencedirect.com/science/article/pii/S0305750X18302018`,
                authors:[
                    `Abhiroop Mukhopadhyay`,
                    `Siddhant Agrawal`,
                    `Athisii Kayina`,
                    `Anugula Reddy`
                ],
                publicationDetails:`World Development, 2018`
            },
            {
                title:`Higher Education and Prosperity: From Catholic Missionaries to Luminosity in India`,
                link:`https://onlinelibrary.wiley.com/doi/abs/10.1111/ecoj.12551`,
                authors:[
                    `Abhiroop Mukhopadhyay`,
                    `Amparo Castelló-Climent`,
                    `Latika Chaudhary`
                ],
                publicationDetails:`The Economic Journal, 2018`
            },
            {
                title:`Mass Education or a Minority Well Educated Elite in the Process of Growth: the Case of India`,
                link:`https://www.sciencedirect.com/science/article/pii/S0304387813000461`,
                authors:[
                    `Abhiroop Mukhopadhyay`,
                    `Amparo Costelló-Climent`
                ],
                publicationDetails:`Journal Of Development Economics, 2013`
            }
        ],
        profileLinks:[
            {
                link:`https://scholar.google.com/citations?user=mu_lttwAAAAJ&hl=en`,
                site:`Google Scholar`
            },
            {
                site:`Website`,
                link:`https://sites.google.com/view/abhiroop`
            }
        ],
    },
    chetan_ghate:{
        name:`Chetan Ghate`,
        image:`assets/people/cg.jpg`,
        title:`Professor
                <br>
                PhD, Claremont Graduate School`,
        description:[
            {
                text:`Chetan Ghate is a Professor in the Economics and Planning 
                Unit of the Indian Statistical Institute in Delhi. He is 
                currently on leave serving as Director, Institute of Economic 
                Growth, Delhi. 
                <br><br>
                Chetan received his Ph.D. from Claremont Graduate University, 
                California, in 1999. 
                He joined ISI Delhi in 2003 after visiting positions in Colorado 
                College, ISI Delhi, and the German Institute of Economic Research 
                (DIW Berlin). 
                <br><br>
                In 2014, Chetan was awarded the Mahalanobis Memorial Gold Medal. 
                He was a member of the Reserve Bank of India’s first Monetary 
                Policy Committee (MPC) from October 2016 - October 2020. From 
                February 2013 to September 2016, he was a member of the Technical 
                Advisory Committee (TAC) for monetary policy at the Reserve Bank 
                of India. In September 2013, he served as a member of the Expert 
                Committee to Revise and Strengthen the Monetary Policy Framework. 
                Chetan chairs the academic advisory board of the Reserve Bank of 
                India Academy, and serves on the editorial board of the RBI 
                Occasional Paper Series and the Indian Growth and Development 
                Review.  He is an external affiliate of the Centre for Research 
                in Macroeconomics and Macro-Finance at Swansea University. He is 
                a member of the Macro Finance Society.
                <br><br>
                Chetan’s main area of research is in the fields of 
                macroeconomics, monetary economics, economic growth and 
                development, and the Indian macroeconomy. He has taught in India, 
                the US, and Australia, and currently teaches graduate level 
                courses in macroeconomics, monetary economics, and open economy 
                macroeconomics at ISI Delhi.
                `
            }
        ],
        publications:[
            {
                title:`Debt Decomposition and the Role of Inflation: A Security Level Analysis for India`,
                link:`https://www.sciencedirect.com/science/article/pii/S0264999322001018`,
                authors:[
                    `Chetan Ghate`,
                    `Piyali Das`
                ],
                publicationDetails:`Economic Modelling, August 2022`
            },
            {
                title:`The Mahalanobis Growth Model: A Macrodynamics Approach`,
                link:`https://link.springer.com/book/9789811689796`,
                authors:[
                    `Chetan Ghate`,
                    `Pawan Gopalakrishnan`,
                    `Srishti Grover`
                ],
                publicationDetails:`Springer-Singapore. July 2022`
            },
            {
                title:`A Monetary Business Cycle Model for India`,
                link:`https://www.isid.ac.in/~cghate/BBG_2020.pdf`,
                authors:[
                    `Chetan Ghate`,
                    `Parantap Basu`,
                    `Shesadri Banerjee`
                ],
                publicationDetails:`Economic Inquiry, 2020`
            },
            {
                title:`Terms of Trade Shocks and Monetary Policy in India`,
                link:`https://www.isid.ac.in/~cghate/GGM_2018_CE.pdf`,
                authors:[
                    `Chetan Ghate`,
                    `Debdulal Mallick`,
                    `Sargam Gupta`
                ],
                publicationDetails:`Computational Economics, January 2018`
            },
            {
                title:`Remoteness, Urbanization and India's Unbalanced Growth`,
                link:`https://www.isid.ac.in/~cghate/DGR_WD.pdf`,
                authors:[
                    `Chetan Ghate`,
                    `Peter Robertson`,
                    `Samarjit Das`
                ],
                publicationDetails:`World Development, 2015`
            }
        ],
        profileLinks:[
            {
                link:`https://scholar.google.com/citations?user=X5tbcAkAAAAJ&hl=en`,
                site:`Google Scholar`
            },
            {
                site:`Website`,
                link:`https://www.isid.ac.in/~cghate/`
            }
        ],
    },
    mudit_kapoor:{
        name:`Mudit Kapoor`,
        image:`assets/people/mudit.jpg`,
        title:`Head and Associate Professor
                <br>
                PhD, University of Maryland`,
        description:[
            {
                text:`Mudit Kapoor is an Associate Professor of Economics in the 
                Economics and Planning Unit of the Indian Statistical Institute 
                in Delhi. 
                <br><br>
                Mudit received his Ph.D. from University of Maryland in College 
                Park in 2004. 
                <br><br>
                He joined ISI Delhi in 2015 after academic position in Indian 
                School of Business (ISB), Hyderabad, India. 
                <br><br>
                Mudit has been a member of Key Advisory Group on Chit Funds set 
                up by the Ministry of Finance, Government of India. He was in the 
                Technical Adivsory Group of the National Data Analytics Platform 
                (NDAP) at NITI Aayog, Government of India.
                `
            }
        ],
        publications:[
            {
                title:`Association of Maternal History of Neonatal Death with Subsequent Neonatal Death across 56 Low- and Middle-Income Countries`,
                link:`https://www.nature.com/articles/s41598-021-97481-3`,
                authors:[
                    `Mudit Kapoor`,
                    `Li Zhihui`,
                    `Kim R`,
                    `Subramanian SV`
                ],
                publicationDetails:`Scientific Reports (Nature). Article number: 19919 October 2021`
            },
            {
                title:`Crop Fires and Cardiovascular Health – A Study from North India`,
                link:`https://www.sciencedirect.com/science/article/pii/S235282732100032X`,
                authors:[
                    `Mudit Kapoor`,
                    `Prachi Singh`,
                    `Ambuj Roy`,
                    `Dinakar Bhasin`,
                    `Shamika Ravi`,
                    `Sagnik Dey`
                ],
                publicationDetails:`Social Science and Medicine - Population Health 2021; vol. 14.`
            },
            {
                title:`Association of Maternal History of Neonatal Death With Subsequent Neonatal Death in India`,
                link:`https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2764579?guestAccessKey=1810c6ef-751d-4e99-8b86-901f09e28b70&utm_source=jps&utm_medium=email&utm_campaign=author_alert-jamanetwork&utm_content=author-author_engagement&utm_term=1m`,
                authors:[
                    `Mudit Kapoor`,
                    `Rockli Kim`,
                    `Tanushree Sahoo`,
                    `Ambuj Roy`,
                    `Shamika Ravi`,
                    `A. K. Shiva Kumar`,
                    `Ramesh Agarwal`,
                    `S. V. Subramanian`
                ],
                publicationDetails:`JAMA Network Open 2020;3(4):e202887`
            }
        ],
        profileLinks:[
            {
                link:`https://scholar.google.co.in/citations?user=QKKOrUEAAAAJ&hl=en`,
                site:`Google Scholar`
            },
            {
                link:`http://www.muditkapoor.org/`,
                site:`Website`
            }
        ],
    },
    prabal_roy_chowdhury:{
        name:`Prabal Roy Chowdhury`,
        image:`assets/people/pro.jpg`,
        title:`Professor
                <br>
                PhD, Indian Statistical Institute`,
        description:[
            {
                text:`Prabal Roy Chowdhury is a professor in the Economics and 
                Planning Unit of the Indian Statistical Institute (ISI), Delhi.
                <br><br>
                He received his PhD from ISI Delhi in 1993. Since then he has 
                worked at the Indian Institute of Management Kolkata and 
                Jawaharlal Nehru University, before joining ISI Delhi in 2003. 
                Prior to that he was a post-doc at Center for Operations Research 
                and Econometrics (CORE) in Louvain-la-Neuve, Belgium.
                <br><br>
                Prabal is a recipient of the Journal of Development Economics 
                best paper award in 2007. He is the editor of Indian Growth and 
                Development Review.
                <br><br>
                His main areas of research are bargaining theory, industrial 
                organization, and development economics. He teaches courses on 
                microeconomics and industrial organization at ISI Delhi.
                `
            }
        ],
        publications:[
            {
                title:`Affirmative Action in the Presence of Income heterogeneity`,
                link:`https://www.sciencedirect.com/science/article/abs/pii/S0899825622000264#:~:text=Income%20heterogeneity%20is%20therefore%20of,class%2C%20as%20well%20as%20identity.`,
                authors:[
                    `Prabal Roy Chowdhury`,
                    `Brishti Guha`
                ],
                publicationDetails:`Games and Economic Behaviour, 2022`
            },
            {
                title:`Simultaneous Borrowing and Saving in Microfinance`,
                link:`https://academic.oup.com/oep/article-abstract/74/3/920/6509164?redirectedFrom=fulltext`,
                authors:[
                    `Prabal Roy Chowdhury`,
                    `Dyotona Dasgupta`
                ],
                publicationDetails:`Oxford Economic Papers, 2022`
            },
            {
                title:`Race to collusion: Monitoring and incentives under multiple-bank lending`,
                link:`https://www.sciencedirect.com/science/article/abs/pii/S002205312100137X`,
                authors:[
                    `Prabal Roy Chowdhury`,
                    `Kaniska Dam`
                ],
                publicationDetails:`Journal of Economic Theory, 2021`
            },
            {
                title:`Natural Shocks and Marriage Markets: Fluctuations in Mehr and Dowry in Muslim Marriages`,
                link:`https://www.sciencedirect.com/science/article/pii/S0014292120301410#:~:text=We%20develop%20a%20model%20of,that%20raise%20(lower)%20income.`,
                authors:[
                    `Prabal Roy Chowdhury`,
                    `Shyamal Chowdhury`,
                    `Debdulal Mallick`
                ],
                publicationDetails:`European Economic Review, 2020`
            },
            {
                title:`Gradualism in Aid and Reforms`,
                link:`https://www.sciencedirect.com/science/article/abs/pii/S002219961630109X`,
                authors:[
                    `Prabal Roy Chowdhury`,
                    `Parimal Bag`
                ],
                publicationDetails:`Journal of International Economics, 2016`
            },
        ],
        profileLinks:[
            {
                link:`https://scholar.google.co.in/citations?user=Odf_tA8AAAAJ&hl=en`,
                site:`Google Scholar`
            },
            {
                site:`Website`,
                link:`https://www.isid.ac.in/~prabalrc/`
            }
        ],
    },
};

export const personRoutes = dictionaryToRouteList(PersonsData,'people/individual/',PersonPageComponent)