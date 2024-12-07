import { paraSpec } from "./rtl.utils";

export interface seminarSpec{
    title:string;
    description?:string;
    speaker?:string;
    datetime?:string;
    venue?:string;
}
export interface pastSeminarsSpec {
    title: string;
    paragraphs: paraSpec[],
    pastSeminars: seminarSpec[]
}
export const PastSeminarsData: pastSeminarsSpec = {
    title: `Past Seminars`,
    paragraphs: [
        {
            text: `Please register for these seminar in order to receive invitations, by filling out the form <a href="https://forms.gle/prEBGTYj5Ctdzd2i9">here</a>.<br>
            For questions, please contact our seminar coordinator <strong> E. Somanathan</strong>
            at <em>som [at] isid.ac.in</em>. <br>
            Some of our seminars are recorded. The links are provided below. You can also check our youtube channel:
            <a href="https://www.youtube.com/@isiseminar8295">ISI Delhi Economics Seminar Channel</a>`
        }
    ],
    pastSeminars: [
        {
            title: `Sovereign Credit Ratings: The Role of Past vs. Future Fiscal Performance`,
            description:`Prachi Mishra, Ashoka University <br>
            Date: 11:30 AM, 06 December, 2024<br>
            Venue: Seminar Room 2 <br>`
        },
        {
            title: `Soil Endowments and Intra-Household Distribution of Consumption in India: A Structural Approach`,
            description:`Bipasha Maity, Ashoka University <br>
            Date: 11:30 AM, 29 November, 2024<br>
            Venue: Seminar Room 2 <br>`
        },
        {
            title: `Collateral, Property Rights and Disparities in Credit Access`,
            description:`Nirupama Kulkarni (CAFRAL) <br>
            Date: 11:30 AM, 22 November, 2024<br>
            Venue: Seminar Room 2 <br>`
        },

        {
            title: `Empower to Prosper: Women Working for Growth`,
            description:`Jonah Matthew Rexer (World Bank) <br>
            Date: 4:30 PM, 14 October, 2024<br>
            Venue: Seminar Room 2 <br>`
        },

        {
            title: `Population Aging, Public Finances, and Alternatives for Retirement Reform`,
            description:`Dominik Maurer, Norwegian School of Economics <br>
            Date: 11:30 AM, 04 October, 2024<br>
            Venue: Seminar Room 2 <br>`
        },


        {
            title: `Panics and Early Warnings`,
            description:`Deepal Basak, Indiana University<br>
            Date: 05 August 2024, 4 PM<br>
            Venue: Seminar Room 2 <br>`
        },
        
            {
                title: `Neglected Hazard: Mental Health and Traffic Noise`,
                description:`Neha Khanna, Binghamton University<br>
                Date: 05 July 2024, 11:30 AM<br>
                Venue: Seminar Room 2 <br>`
            },


        {
            title: `Trade Clubs and International Environmental Agreements: The Basel Convention`,
            description:`Prakrati Thakur, Rensselaer Polytechnic Institute<br>
            Date: 06 June 2024, 3:30 PM<br>
            Venue: Seminar Room 2 <br>`
        },

            {
                title: `Job Market Signalling Via Social Ties`,
                description:`Shahir Safi, New Economic School<br>
                Date: 10 May 2024, 11:30 AM<br>
                Venue: Seminar Room 2 <br>`
            },
            
        {
            title: `Multi-source labour statistics.  Mixture of Hidden Markov Models and Machine learning tools`,
            description:`Roberta Varriale, Sapienza University of Rome<br>
            Date: 03 May 2024, 11:30 AM<br>
            Venue: Seminar Room 2 <br>`
        },
        {
            title: `Are the Effects of Climate Change on Agriculture Underestimated? A Disaggregated Analysis for India`,
            description:`Shreekant Gupta, Delhi School of Economics<br>
            Date: 24 April, 2024 (Wednesday), 11:30 AM<br>
            Venue: Classroom 14 <br>`
        },
        {
            title: `Racialized urban spaces and environmental injustice using high resolution paired data`,
            description:`Deepak Malghan, IIM, Bangalore<br>
            Date: 12 April, 2024, 11:30 AM<br>
            Venue: Seminar Room 2 <br>`
        },
        {
            title: `Adapting to Flood Risk: Evidence from a Global Panel of Cities`,
            description:`Vaidehi Tandel, University of Manchester<br>
            Date: 22 March, 2024, 11:30 AM<br>
            Venue: Seminar Room 2 <br>`
        },
        {
            title: `Econometric modelling of carbon dioxide emissions and 
            concentrations, ambient temperatures and ocean deoxygenation`,
            description:` Speaker: Alok Bhargava, University of Maryland <br>
            Date: 18 March 2024, 11:30 AM <br>
            Venue: Seminar Room 2 <br>`
        },
        {
            title: `Global Food Prices, Local Frictions and Air Pollution`,
            description:` Speaker: Digvijay Singh Negi, IGIDR <br>
            Date: 15 March 2024, 11:30 AM <br>
            Venue: Seminar Room 2 <br>`
        },
        {
            title: `Seemingly informative matching mechanisms`,
            description:` Speaker: Dinko Dimitrov, Saarland University <br>
            Date: 08 March 2024, 11:30 AM <br>
            Venue: Classroom 14 <br>`
        },
        {
            title: `Heterogeneous Noise and Stable Miscoordination`,
            description:` Speaker: Srinivas Arigapudi, IIT, Kanpur <br>
            Date: 01 March 2024, 11:30 AM <br>
            Venue: Classroom 14 <br>`
        },
        {
            title: `Sovereign Spreads and the Political Leaning of Nations`,
            description:` Speaker: Alok Johri, McMaster University <br>
            Date: 29 February 2024, 11:30 AM <br>
            Venue: Classroom 14 <br>`
        },
        {
            title: `Similarity of Information in Games`,
            description:` Speaker: Aditya Kuvalekar, University of Essex <br>
            Date: 16 February 2024, 2:30 PM <br>
            Venue: Seminar Room 2 <br>`
        },

        {
            title: `Incontestable Mechanisms`,
            description:` Speaker: Inacio Bo, University of Macau <br>
            Date: 13 February 2024, 2:30 PM (Tuesday) <br>
            Venue: Seminar Room 2 <br>`
        },
        {
            title: `Timing of the tie-breaker`,
            description: `Speaker: Amit Goyal, ISI, Delhi<br>
            Date: 09 February 2024, 11:30 AM<br>
            Venue: Seminar Room 2 <br>`
        },
        {
            title: `Putting all Eggs in One Basket: Insights from a Correlation 
            Inequality`,
            description: `Speaker: Siddhartha Sahi, Rutgers University <br>
            Date: 29 November 2023, 3:30 PM <br>
            Venue: Seminar Room 2 <br>`
        },

        {
            title: `Persistence in physicians locations: Long-run evidence from decentralised loan repayment programs`,
            description: `Speaker: Anomita Ghosh, University of Illinois, Urbana-Champaign <br>
            Date: 24 November 2023, 11:30 AM <br>
            Venue: Seminar Room 2 <br>`
        },

        {
            title: `Deadweight Losses or Gains from In-kind Transfers:  Experimental Evidence`,
            description: `Speaker: Gaurav Datt, Monash University <br>
            Date: 17 November 2023, 11:30 AM <br>
           Venue: Seminar Room <br>`
        },

        {
            title: `Flexible Bayesian Quantile Analysis of Residential Rental Rates`,
            description: `Speaker: Arshad Rahman, Indian Institute of Technology, Kanpur <br>
            Date: 03 November 2023, 11:30 AM <br>
           Venue: Seminar Room <br>`
        },
        {
            title: `Opponent's foresight and optimal choices`,
            description: `Speaker: Jeevant Rampal, Indian Institute of Management, Ahmedabad <br>
            Date: 20 October 2023, 11:30 AM <br>
            Venue: Seminar Room 2 <br>`
        },
        {
            title: `Knowing your lemon before you dump it`,
            description:`Speaker: Alessandro Pavan, Northwestern University <br>
            Date: 13 October 2023, 11:30 AM <br>
            Venue: Classroom 13 <br>`
        },
        {
            title: `On efficiency with heterogenous forecasts`,
            description: `
            Speaker: Shurojit  Chatterji, Singapore Management University<br>
            Date: 29 September 2023 <br>
            Venue: Seminar Room 2<br>`,
        },
        {
            title: `The (soft) power to tax: compliance and tax morale as imperial legacy`,
            description: `
            Speaker: Anand Murugesan, Central European University<br>
            Date: 01 September 2023 <br>
            Venue:  Classroom 14 <br>`,
        },
        {
            title: `Firm presence, environmental quality, and economic activity`,
            description: `
            Speaker: Namrata Kala, MIT<br>
            Date: 25 August 2023 <br>
            Venue:  Seminar Room 2 <br>`,
        },
        {
            title: `Repeated Trading: Transparency and Market Structure`,
            description: `
            Speaker: Santanu Roy, Southern Methodist University<br>
            Date: 07 August 2023 <br>
            Venue:  Seminar Room 2 <br>`,
        },
        {
            title: `<b>Follow the Crowd: But Who Follows, Who Counteracts, and Which Crowd?</b>`,
            description: `
            Speaker: Moses Shayo, Hebrew University of Jerusalem<br>
            Date: 04 August 2023 <br>
            Venue: Seminar Room 2 <br>`
        },
        {
            title: `Doubt: Insights from a cross-cultural experiment `,
            description:`
            Speaker: Subrato Banerjee, IIT Bombay<br>
            Date: 21 July 2023<br>
            Venue: Seminar Room 2<br>`
        },
        {
            title: `<b>Locked-in Dirty Fuels: An ethnographic study on cooking fuel transition in Nusa Tenggara Timur, Indonesia</b> `,
            description: `
            Speaker: <b>Komali Yenneti, University of Wolverhampton</b><br>
            Date: <b> 14 July 2023 </b><br>
            Venue: <b> Seminar Room 2 </b><br>`
        },
        {
            title: `<b>The Dynamics of Inequality in Democratic Public Good Provision</b> `,
            description: `
            Speaker: <b>Dyotona Dasgupta, O.P. Jindal Global University</b><br>
            Date: <b> 04 July 2023 </b><br>
            Venue: <b> Seminar Room 2 </b><br>`
        },
        {
            title: `<b>A well-targeted interest rate policy</b> `,
            description: `
            Speaker: <b>Gurbachan Singh, (Visiting Professor) Ashoka University</b><br>
            Date: <b> 12 May 2023 </b><br>
            Venue: <b> Seminar Room 2 </b><br>`
        },
        {
            title: `<b>Forest clearing and fatal human elephant conflict in India</b> `,
            description: `
            Speaker: <b>Sumeet Gulati, University of British Columbia</b><br>
            Date: <b> 28 April 2023 </b><br>
            Venue: <b> Zoom </b><br>`
        },
        {
            title: ` <b>A Division of Laborers: Identity and Efficiency in India</b> `,
            description: `
            Speaker: <b>Daniel Keniston, Lousiana State University</b><br>
            Date: <b> 21 April 2023</b><br>
            Venue: <b> Zoom </b><br>
            `
        },
        {
            title: ` <b>Does reshaping gender attitudes impact women's long term outcomes? Evidence from a school-based experiment</b> `,
            description: `
            Speaker: <b>Tarun Jain, IIM Ahmedabad</b><br>
            Date: <b> 17 March 2023 </b><br>
            Venue: <b> Seminar Room </b><br>
        `},
        {
            title: ` <b>Insurance Cyclicality</b> `,
            description: `
            Speaker: <b>Anand Chopra, IIT Kanpur</b><br>
            Date: <b> 10 March 2023</b><br>
            Venue: <b> Seminar Room </b><br>
    `},
        {
            title: ` <b>Intertemporal Expectations Coordination</b> `,
            description: `

Speaker: <b>Sayantan Ghosal, Glasgow University</b><br>
Date: <b> 17 February 2023</b><br>
Venue: <b> Seminar Room</b><br>


    `},
        {
            title: ` <b>Productivity and Quality of Multiple-Product Firms</b> `,
            description: `

Speaker: <b>Arpita Chatterjee, IIM Bangalore</b><br>
Date: <b> 10 February 2023</b><br>
Venue: <b> Seminar Room </b><br>


    `},
        {
            title: ` <b>The Changing Polarization of Party Ideologies: The Role of Sorting</b> `,
            description: `

Speaker: <b>Satyajit Chatterjee, Federal Reserve Bank of Philadelphia</b><br>
Date: <b> 03 February 2023 </b><br>
Venue: <b> Seminar Room </b><br>


    `},
        {
            title: ` <b>Affirmative Action in Two Dimensions: A Multi-Period Apportionment Problem</b> `,
            description: `

Speaker: <b>Manshu Khanna, Peking University</b><br>
Date: <b> 31 January 2023 </b><br>
Venue: <b> Seminar Room </b><br>


    `},
        {
            title: ` <b> Affirmative Action and Application Strategies: Evidence from Field Experiments in Colombia </b> `,
            description: `

Speaker: <b>Ritwik Banerjee, IIM Bangalore</b><br>
Date: <b> 27 January 2023 </b><br>
Venue: <b> Seminar Room </b><br>


    `},
        {
            title: ` <b>Advertising Platforms and Privacy</b> `,
            description: `

Speaker: <b>Sridhar Moorthy, University of Toronto</b><br>
Date: <b> 13 January 2023 </b><br>
Venue: <b> Seminar Room </b><br>


    `},
        {
            title: ` <b>Inertial Updating</b> `,
            description: `

Speaker: <b>Matthew Kovach, Virginia Tech</b><br>
Date: <b> 15 December 2022</b><br>
Venue: <b> Seminar Room </b><br>


 Title:<b> In-Kind Transfers as Insurance</b> <br>
 Speaker:<b> Sandip Sukhtankar, University of Virginia</b> <br>
 Date:<b> 09 December 2022 </b> <br>
 Venue:<b> Seminar Room </b> <br>


    `},
        {
            title: ` <b>School Choice with Preference Rank Classes</b> `,
            description: `

Speaker: <b>Szilvia Papai, Concordia University</b><br>
Date: <b> 02 December, 2022</b><br>
Venue: <b> Online </b><br>


    `},
        {
            title: ` <b>Gender, Marriage, and Portfolio Choice: Role of Income Risk</b> `,
            description: `

Speaker: <b>Pubali Chakraborty, Ashoka University</b><br>
Date: <b> 25 November, 2022 </b><br>
Venue: <b> In person </b><br>


    `},
        {
            title: ` <b>Songs of Refugees</b> `,
            description: `

Speaker: <b>Stelios Michalopoulos, Brown University</b><br>
Date: <b> 14 November, 2022 </b><br>
Venue: <b> Online </b><br>


    `},
        {
            title: ` <b>Made in Heaven, Matched by Parents: Does Arranged Marriage Restrict Labour Market Autonomy and Participation of Women? Theory and Evidence from India</b>`,
            description: `
Speaker: <b>Anirban Kar, Delhi School of Economics</b><br>
Date: <b> 11 November, 2022</b><br>
Venue: <b> In Person </b><br>
    `},
        {
            title: ` <b>Some Characterizations of Generalized Top Trading Cycles</b> `,
            description: `
Speaker: <b>Yuki Tamura, New York University, Abu Dhabi</b><br>
Date: <b> 4 November, 2022</b><br>
Venue: <b> Online </b><br>


    `},
        {
            title: ` <b>Modelling optimal lockdowns with waning immunity</b> `,
            description: `

Speaker: <strong>Aditya Goenka</strong><b>, University of Birmingham</b><br>
Date: <b> 23 September, 2022 </b><br>


    `},
        {
            title: ` <b>Cognitive Endurance as Human Capital</b> `,
            description: `

Speaker: <strong>Supreet Kaur</strong><b>, University of California, Berkeley</b><br>
Date: <b> 09 September, 2022</b><br>


    `},
        {
            title: ` <b>Fair congestion</b> `,
            description: `

Speaker: <strong>Herve Moulin</strong><b>, University of Glasgow</b><br>
Date: <b> 08 September, 2022</b><br>


    `},
        {
            title: ` <b>Does the choice of words in the Fed's Board of Governors' speeches matter?</b> `,
            description: `

Speaker: <strong>Abhinav Anand</strong><b>, Indian Institute of Management, Bangalore </b><br>
Date: <b> 02 September, 2022 </b><br>


    `},
        {
            title: ` <b>Does Political Quota Lead to Development? Evidence from India</b> `,
            description: `

Speaker: <strong>Resuf Ahmed</strong><b>, HEC Lausanne</b><br>
Date: <b> 26 August, 2022 </b><br>


    `},
        {
            title: ` <b>Building State Capacity: What Is the Impact of Development Projects?</b> `,
            description: `

Speaker: <strong>David Evans</strong><b>, Center for Global Development</b><br>
Date: <b> 19 August, 2022 </b><br>


    `},
        {
            title: ` <b>The liquidity trap</b> `,
            description: `

Speaker: <strong>Pradeep Dubey</strong><b>, Stony Brook University</b><br>
Date: <b> 08 August, 2022 </b><br>


    `},
        {
            title: ` <b>Inferring trade-offs in university admissions: evidence from Cambridge</b> `,
            description: `

Speaker: <strong>Debopam Bhattacharya</strong><b>, Cambridge University</b><br>
Date: <b> 29 July, 2022 </b><br>


    `},
        {
            title: ` <b>Optimistic Directors and CEO Turnover</b> `,
            description: `

Speaker: <strong>Jaideep Chowdhury</strong><b>, James Madison University</b><br>
Date: <b> 20 July, 2022 </b><br>


    `},
        {
            title: ` <b>Model of Raiffa’s Bargaining Solution for a Strategic Game</b> `,
            description: `

Speaker: <strong>Kalyan Chatterjee</strong><b>, Penn State University</b><br>
Date: <b> 21 June, 2022</b><br>


    `},
        {
            title: ` <b>Women's Inheritance Rights and Time Use in India</b> `,
            description: `

Speaker: <strong>Tanu Gupta</strong><b>, IGIDR</b><br>
Date: <b> 16 June, 2022 </b><br>


    `},
        {
            title: ` <b>Female representation in school management and school quality</b> `,
            description: `

Speaker: <strong>Bharti Nandwani</strong><b>, IGIDR</b><br>
Date: <b> 3 June, 2022 </b><br>
<b>Recording:</b> <a href="https://youtu.be/L1DB5REH8XQ">https://youtu.be/L1DB5REH8XQ </a>


    `},
        {
            title: ` <b>Random choice from a weighted tournament</b> `,
            description: `

Speaker: <strong>Yves Sprumont</strong><b>, Deakin University</b><br>
Date: <b> 27 May, 2022 </b><br>


    `},
        {
            title: ` <b>Transhumant Pastoralism, Climate Change and Conflict in Africa</b> `,
            description: `

Speaker: <strong>Nathan Nunn</strong><b>, Harvard University</b><br>
Date: <b> 13 May, 2022 </b><br>
<b>Recording:</b> <a href="https://youtu.be/pDDPEjSHA2w">https://youtu.be/pDDPEjSHA2w </a>


    `},
        {
            title: ` <b>Individual Pay for Collective Performance and Deforestation: Evidence from Brazil</b> `,
            description: `

Speaker: <strong>Po Yin Wong</strong><b>, Hong Kong Monetary Authority</b><br>
Date: <b> 6 May, 2022 </b><br>


    `},
        {
            title: ` <b>Social choice under gradual learning</b> `,
            description: `

Speaker: <strong>Takuro Yamashita</strong><b>, Tolouse School of Economics</b><br>
Date: <b> 28 April, 2022 </b><br>
<b>Recording:</b> <a href="https://youtu.be/W_19JW_-iIY">https://youtu.be/W_19JW_-iIY </a>


    `},
        {
            title: ` <b> Learning from Others </b> `,
            description: `

Speaker: <strong>Gautam Rao</strong><b>, Harvard University</b><br>
Date: <b> 22 April, 2022 </b><br>
<b>Recording:</b> <a href="https://youtu.be/vqvtp0gBN4w">https://youtu.be/vqvtp0gBN4w </a>


    `},
        {
            title: ` <b>Structural Transformation and Environmental Externalities</b> `,
            description: `

Speaker: <strong>Teevrat Garg</strong><b>, University of California, San Diego</b><br>
Date: <b> 15 April, 2022 </b><br>


    `},
        {
            title: ` <b> Meritocracy in the Face of Group Inequality </b> `,
            description: `

Speaker: <strong>Rajiv Sethi</strong><b>, Columbia University</b><br>
Date: <b> 8 April, 2022 </b><br>
<b>Recording:</b> <a href="https://youtu.be/Bwx2CBqmxc4">https://youtu.be/Bwx2CBqmxc4 </a>


    `},
        {
            title: ` <b>A data-driven approach to estimating the social cost of carbon </b> `,
            description: `

Speaker: <strong>Tama Carleton</strong><b>, University of California, Santa Barbara</b><br>
Date: <b> 01 April, 2022 </b><br>
<b>Recording:</b> <a href="https://youtu.be/--Azz1_jTRs">https://youtu.be/--Azz1_jTRs</a>


    `},
        {
            title: ` <b>Statistical Uncertainty and Coarse Contracts</b> `,
            description: `

Speaker: <strong>Justin Burkett</strong><b>, Georgia Institute of Technology</b><br>
Date: <b> 25 March, 2022 </b><br>
<b>Recording:</b> <a href="https://youtu.be/Pf06LVA_Xz0">https://youtu.be/Pf06LVA_Xz0 </a>


    `},
        {
            title: ` <b>Quantifying the Inefficiency of Multi-unit Auctions for Normal Goods</b> `,
            description: `

Speaker: <strong>Brian Baisa</strong><b>, Amherst College</b><br>
Date: <b> 18 March, 2022 </b><br>


    `},
        {
            title: ` <b>Global Growth and Development: Why Emerging Countries Matter?</b> `,
            description: `

Speaker: Manoj Pant, Indian Institute of Foreign Trade<br>
Date: <b> 15 March, 2022 </b><br>
<b>Recording:</b> <a href="https://www.youtube.com/embed/1XKRw6gynmg">https://www.youtube.com/embed/1XKRw6gynmg </a>


    `},
        {
            title: ` <b>Forced Displacement, Mental Health, and Child Development: Evidence from the Rohingya Refugees </b>`,
            description: `

Speaker: Asad Islam, Monash University<br>
Date: <b> 4 March, 2022 </b><br>
<b>Recording:</b> <a href="https://www.youtube.com/embed/RPOLHeceaJw"> https://www.youtube.com/embed/RPOLHeceaJw </a>


    `},
        {
            title: ` <b>Deconstructing Aggregate Fluctuations</b> `,
            description: `

Speaker: Girish Bahl, University of Western Australia<br>
Date: <b> 25 February, 2022 </b><br>
<b>Recording:</b> <a href="https://www.youtube.com/embed/kk2zTOk0jhg">https://www.youtube.com/embed/kk2zTOk0jhg</a>


    `},
        {
            title: ` <b>Informed Citizens and Gender Inequality in Polit`,
            description: `

Outcomes: Quasi-Experimental Evidence from India</b> <br>
Speaker: <strong>Abhishek Chakravarty</strong><b>, University of Manchester</b><br>
Date: <b>28 January, 2022 </b>


    `},
        {
            title: ` <b>Crowding in School Choice</b> `,
            description: `

Speaker: <strong>Yu Zhou</strong><b>, Kyoto University</b><br>
Date: <b>10 December, 2021 </b>


    `},
        {
            title: ` <b>Security-bid Auctions with Information Acquisition</b> `,
            description: `

Speaker: <strong>Yunan Li</strong><b>, City University of Hong Kong</b><br>
Date: <b>03 December, 2021 </b>


    `},
        {
            title: ` <b>Wildfires, Smoky Days, and Labor Supply</b> `,
            description: `

Speaker: <strong>Ron Chan</strong><b>, University of Manchester</b><br>
Date: <b>26 November, 2021 </b><br>
<b>Recording:</b> <a href="https://www.youtube.com/embed/iRLxNDGzHys">https://www.youtube.com/embed/iRLxNDGzHys</a>


    `},
        {
            title: ` <b>Causal Inference for Discrimination</b> `,
            description: `

Speaker: <strong>Sunil Kumar</strong><b>, India Institute, Kings College London</b><br>
Date: <b>19 November, 2021 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/UzWqvzCMERQ">https://www.youtube.com/embed/UzWqvzCMERQ</a>


    `},
        {
            title: ` <b>Using Latent Factor Models for Causal Inference with and without Instrumental Variable</b> `,
            description: `

Speaker: <strong>Sauvik Banerjee</strong>, Indian Institute of Technology, Mumbai<br>
Date: <b> 12 November, 2021 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/GmeIOcdWMUY">https://www.youtube.com/embed/GmeIOcdWMUY</a>


    `},
        {
            title: ` <b>Intergenerational Impacts from the World’s Largest Early Childhood Program</b>`,
            description: `

Speaker: <strong>Saravana Ravindran</strong>, <b>National University of Singapore</b><br>
Date: <b> 08 October, 2021 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/TTmwEZ-KrMU">https://www.youtube.com/embed/TTmwEZ-KrMU</a>


    `},
        {
            title: ` <b>Blockchains, Liquid Democracy and Information Aggregation</b> `,
            description: `

Speaker: <strong>Amrita Dhillon</strong>, <b>Kings College</b><br>
Date: <b> 01 October, 2021 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/vmyxm_MkYQ4">https://www.youtube.com/embed/vmyxm_MkYQ4</a>


    `},
        {
            title: ` <b>Is vertical foreclosure a concern in markets featuring network effects? </b>`,
            description: `

Speaker: <strong>Shiva Sekhar</strong>, <b>University of Passau</b><br>
Date: <b>17 September, 2021 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/eOkmUJCz6m0">https://www.youtube.com/embed/eOkmUJCz6m0</a>


    `},
        {
            title: ` <b>Labor migration, capital accumulation, and the structure of rural labor markets</b> `,
            description: `

Speaker: <strong>Taryn Dinkelman</strong><b>, University of Notre Dame</b><br>
Date: <b> 10 September, 2021 </b>


    `},
        {
            title: ` <b>The Unholy Trinity: Regulatory Forbearance, Government-Owned Banks and Zombie Firms</b> `,
            description: `

Speaker: <strong>Nirupama Kulkarni</strong><b>, CAFRAL</b><br>
Date: <b> 27 August, 2021 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/mc_gpmKgqxY">https://www.youtube.com/embed/mc_gpmKgqxY</a>


    `},
        {
            title: ` <b>Indecisiveness in Collective Choice</b> `,
            description: `

Speaker: <strong>Sean Horan</strong><b>, University of Montreal</b><br>
Date: <b>20 August, 2021 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/qhC12XpU2A0">https://www.youtube.com/embed/qhC12XpU2A0</a>


    `},
        {
            title: ` <b>A model of online click behavior</b> `,
            description: `

Speaker: <strong>Levent Ulku</strong><b>, ITAM, Mexico</b><br>
Date: <b>13 August, 2021 </b><br>


    `},
        {
            title: ` Culture, Economic Shocks and Conflict: Does trust moderate the effect of price shocks on conflict? `,
            description: `

Speaker: <strong>Hasin Yousaf</strong><b>, University of New South Wales</b><br>
Date: <b> 6 August, 2021 </b><br>


 Title: <b>Til Dowry Do Us Part: Bargaining and Violence in Indian Families</b> <br>
Speaker: <strong>Rossella Calvi</strong><b>, Rice University</b><br>
Date: <b>23 July, 2021 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/NlyxdbHOfR8">https://www.youtube.com/embed/NlyxdbHOfR8</a>


    `},
        {
            title: ` <b>How to De-reserve Reserves</b> `,
            description: `

Speaker: <strong>Bertan Turhan</strong><b>, Iowa State University</b><br>
Date: <b>16 July, 2021</b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/Y5HIi4H9iyI">https://www.youtube.com/embed/Y5HIi4H9iyI</a>


    `},
        {
            title: ` Does Traffic Congestion pose Health Hazards? Evidence from a Highly Congested and Polluted City `,
            description: `

Speaker: <strong>Kanishka Kacker</strong><b>, Indian Statistical Institute</b><br>
Date: <b> 2 July, 2021</b><br>


    `},
        {
            title: ` Incentives and Efficiency in Matching with Transfers: Towards Nonquasilinear Package Auctions `,
            description: `

Speaker: <strong>Ryan Tierney</strong><b>, University of Southern Denmark</b><br>
Date: <b> 25 June, 2021 </b><br>


    `},
        {
            title: ` Import Competition, Formalization, and the Role of Contract Labor `,
            description: `

Speaker: <strong>Vidhya Soundarajan</strong><b>, Indian Institute of Management - Bangalore</b><br>
Date: <b> Friday, 16th April, 2021 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/pBnta2p6GvM">https://www.youtube.com/embed/pBnta2p6GvM</a>


 Title: Social Media and Xenophobia: Evidence from Russia <br>
Speaker: <strong>Maria Petrova</strong><b>, Pompeu Fabra University</b><br>
Date: <b> Friday, 9th April, 2021 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/geSq5Zx69HI">https://www.youtube.com/embed/geSq5Zx69HI</a>


 Title: Towns and Rural Land Inequality in India <br>
Speaker: <strong>Prashant Bharadwaj,</strong><b> University of California, San Diego</b><br>
Date: <b> Thursday, 1st April, 2021 </b><br>


 Title: Quantifying Pressure and Performance in Limited Over Cricket Matches <br>
Speaker: <strong>Diganta Mukherjee,</strong><b> Indian Statistical Institute, Kolkata</b><br>
Date: <b> Friday, 2nd April, 2021 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/Yat2P8mO-Aw">https://www.youtube.com/embed/Yat2P8mO-Aw</a>


 Title: The Social Costs of Keystone Species Collapse: Evidence From The Decline of Vultures in India <br>
Speaker: <strong>Anant Sudarshan,</strong><b> University of Chicago</b><br>
Date: <b> Friday, 26th March 2021 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/NkkPzmL0z-8">https://www.youtube.com/embed/NkkPzmL0z-8</a>


    `},
        {
            title: ` Delegation in veto bargaining `,
            description: `

Speaker: <strong>Andreas Kleiner,</strong><b> Arizona State University</b><br>
Date: <b> Friday, 19th March 2021 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/kbv3TvdLd4c">https://www.youtube.com/embed/kbv3TvdLd4c</a>


    `},
        {
            title: ` Generating a POS Tagged Text Corpus for Bengali: Issues, Challenges, and Outcomes `,
            description: `

Speaker: <strong>Niladri Dash,</strong><b> Indian Statistical Institute, Kolkata</b><br>
Date: <b> Monday, 15th March 2021 </b><br>


 Title: Short- and Long-Run Consumption and Non-Payment Responses to Retail Electricity Prices in India <br>
Speaker: <strong>Shefali Khanna,</strong><b> Harvard University</b><br>
Date: <b> Friday, 12th March 2021 </b><br>


    `},
        {
            title: `The effects of India’s BITs termination on FDI inflows `,
            description: `

Speaker: <strong> Elena Kotyrlo and Hryhorii M. Kalachyhin,</strong><b> Higher School of Economics</b><br>
Date: <b> Friday, 5th March, 2021 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/SQcVBYfrIBc">https://www.youtube.com/embed/SQcVBYfrIBc</a>


    `},
        {
            title: ` Expanding Financial Access Via Credit Cards: Evidence from Mexico `,
            description: `

Speaker: <strong>Aprajit Mahajan,</strong><b> University of California, Berkeley</b><br>
Date: <b> Friday, 26th February, 2021 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/sk6keTXpUf4">https://www.youtube.com/embed/sk6keTXpUf4</a>


    `},
        {
            title: ` Female labor supply and jobless recovery `,
            description: `

Speaker: <strong>Pubali Chakraborty,</strong><b> Ashoka University</b><br>
Date: <b> Friday, 19th February, 2021 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/4fkMXBFSuVw">https://www.youtube.com/embed/4fkMXBFSuVw</a>


    `},
        {
            title: ` Gender and leadership in organizations: Promotions, demotions and angry workers `,
            description: `

Speaker: <strong>Danila Serra,</strong><b> Texas A&amp;M</b><br>
Date: <b> Friday, 12th February, 2021 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/DEmmDbixB1c">https://www.youtube.com/embed/DEmmDbixB1c</a>


    `},
        {
            title: ` <b>Effects of productivity growth on domestic savings across countries</b> `,
            description: `

Speaker: <strong>Abhishek Kumar,</strong><b> Indira Gandhi Institute of Development Research</b><br>
Date: <b> Friday, 5th February, 2021 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/Bn03zoDA7g4">https://www.youtube.com/embed/Bn03zoDA7g4</a>


    `},
        {
            title: ` <b>Attack and Interdiction on Networks</b>`,
            description: `

Speaker: <strong>Bhaskar Dutta, </strong><b> Ashoka University,</b><br>
Date: <b> Friday, 29th January, 2021 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/Le3xl9mh2rk">https://www.youtube.com/embed/Le3xl9mh2rk</a>


    `},
        {
            title: ` <b>Fair Cake Division Under Monotone Likelihood Ratios</b>`,
            description: `

Speaker: <strong>Siddharth Barman,</strong><b> Indian Institute of Science, Bangalore</b><br>
Date: <b> Friday, 22nd January, 2021 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/xUE-MQmd0Qw">https://www.youtube.com/embed/xUE-MQmd0Qw</a>


    `},
        {
            title: ` Demographic Transitions across Time and Space `,
            description: `

Speaker: <strong>Nezih Guner, </strong><b>Center for Monetary and Financial Studies, Spain</b><br>
Date: <b> Friday, 18th December, 2020</b>


    `},
        {
            title: ` COVID19 vaccines: An update on progress and the challenges ahead `,
            description: `

Speaker: <strong>Harish Iyer, </strong><b>Bill &amp; Melinda Gates Foundation</b><br>
Date: <b> Tuesday, 15th December, 2020 </b>


 Title: Implementation by vote-buying mechanisms<br>
Speaker: <strong>Jon Eguia, </strong><b>Michigan State University</b><br>
Date: <b> Thursday, 10th December, 2020 </b>


    `},
        {
            title: ` Bombs, Broadcasts and Resistance: Allied Intervention and Domestic Opposition to the Nazi Regime during World War II `,
            description: `

Speaker: <strong>Joachim Voth, </strong><b>University of Zurich </b><br>
Date: <b> Friday, 4th December, 2020 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/0pyKhydqHJU">https://www.youtube.com/embed/0pyKhydqHJU</a>


    `},
        {
            title: ` The effect of climate policy on productivity and cost pass-through in the German manufacturing sector `,
            description: `

Speaker: <strong>Beat Hintermann, </strong><b>University of Basel</b><br>
Date: <b> Friday, 20th November, 2020 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/WMqOOZY_jRA">https://www.youtube.com/embed/WMqOOZY_jRA</a>


    `},
        {
            title: ` Did Railways affect Literacy? Evidence from India `,
            description: `
            Speaker: <strong>James Fenske, </strong><b>University of Warwick</b><br>
            Date: <b> Friday, 6th November, 2020 </b><br>
            <b>Recording</b>: <a href="https://www.youtube.com/embed/pT6SxpmZ4EY">https://www.youtube.com/embed/pT6SxpmZ4EY</a>


 Title: A Structural Framework For Regional Macroeconomic Analysis <br>
Speaker: <strong>Jordan Norris, </strong><b>New York University Abu Dhabi </b><br>
Date: <b> Friday, 30th October, 2020 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/XmjCZP7hwEE">https://www.youtube.com/embed/XmjCZP7hwEE</a>


 Title: <b>Are Simple Mechanisms Optimal when Agents are Unsophisticated?</b> <br>
Speaker: <strong>Jiangtao Li, </strong><b>Singapore Management University </b><br>
Date: <b> Friday, 23rd October, 2020 </b>


    `},
        {
            title: ` <b>Contributions of Paul Milgrom and Robert Wilson to Auction Theory</b>`,
            description: `

Speaker: <strong>Sushil Bikhchandani</strong><b>University of California, Los Angeles</b><br>
Date: <b> Thursday, 22nd October, 2020 </b><br>
<b>Slides</b>: <a href="Nobel_2020_bikh.pdf">Click here</a><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/ZgdA2TJll9g">https://www.youtube.com/embed/ZgdA2TJll9g</a>


    `},
        {
            title: `<b> A Subsidy Inversely Related to the Product Price </b> `,
            description: `

Speaker: <strong>Takahiko Kiso, </strong><b>University of Aberdeen </b><br>
Date: <b> Friday, 16th October, 2020 </b>


 Title: Monopolistic Screening with Single-Peaked Preferences <br>
Speaker: <strong>Rene Saran, </strong><b>University of Cincinnati, Friday, 2nd October, 2020 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/dGwgZEWM4cE">https://www.youtube.com/embed/dGwgZEWM4cE</a>


    `},
        {
            title: ` <b>The Future in Mind: Long-Run Impact of an Aspirations Intervention in Rural Ethiopia</b> `,
            description: `

Speaker: <strong>Stefan Dercon, </strong><b>University of Oxford, 25th September, 2020 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/QVTut2hiGvw">https://www.youtube.com/embed/QVTut2hiGvw</a>`},
        {
            title: ` <b>Maternal Mortality and Women's Political Participation</b> `,
            description: `
Speaker: <strong>Joseph Flavian Gomes, </strong><b>Economics of School of Louvain, 18th September, 2020 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/1n19jozmG-o">https://www.youtube.com/embed/1n19jozmG-o</a>


    `},
        {
            title: ` <b>The Political Competition over Life and Death - Evidence from Infant Mortality in India</b> `,
            description: `

Speaker: <strong>Lore Vandewalle, </strong><b>Graduate Institute Geneva, 11th September, 2020 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/PWklnkZWnOQ">https://www.youtube.com/embed/PWklnkZWnOQ</a>


    `},
        {
            title: ` <b>Blood allocation with replacement donors </b>`,
            description: `

Speaker: <strong>Utku Unver, </strong><b>Boston College, 4th September, 2020 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/QyEPg4TKmT4">https://www.youtube.com/embed/QyEPg4TKmT4</a>


    `},
        {
            title: ` <b>Why Do People Stay Poor? Evidence from an Asset Transfer Programme in Rural Bangladesh</b>`,
            description: `

Speaker: <strong>Maitreesh Ghatak, </strong><b>London School of Economics, 28th August, 2020 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/9lJfufPF8Ds">https://www.youtube.com/embed/9lJfufPF8Ds</a>


    `},
        {
            title: ` Imperfect Information, Learning and Endogenous Persistence `,
            description: `

Speaker: <strong>Bo Yang, </strong><b>Swansea University, 21th August, 2020 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/z_bC7LBSZpE">https://www.youtube.com/embed/z_bC7LBSZpE</a>


    `},
        {
            title: ` <b>An Economic Model of the Last-Mile Internet </b>`,
            description: `

Speaker: <strong>Rakesh Chaturvedi, </strong><b>Indraprastha Institute of Information Technology, Delhi, 14th August, 2020</b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/RWzfRt2kCk4">https://www.youtube.com/embed/RWzfRt2kCk4</a>


    `},
        {
            title: ` <b>The Vigilant Eating Rule: A general approach for probabilistic economic design with constraints </b>`,
            description: `

Speaker: <strong> Haris Aziz, </strong><b>University of New South Wales, 7th August, 2020 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/fcn4CRyJ7WE">https://www.youtube.com/embed/fcn4CRyJ7WE</a>


    `},
        {
            title: ` <b>A theory of simplicity in games and mechanism design</b> `,
            description: `

Speaker: <strong> Marek Pycia, </strong><b>University of Zurich, 31st July, 2020 </b>


 Title: <b>When Is Debt Odious? A Theory of Repression and Growth Traps </b><br>
Speaker: <strong> Viral Acharya, </strong><b>New York University, 24th July, 2020 </b><br>
<b>Recording</b>: <a href="https://www.youtube.com/embed/D8OqfYYuVBM">https://www.youtube.com/embed/D8OqfYYuVBM</a>


 Title: <b>Matching platforms </b><br>
Speaker: <strong> Seung Han Yoo, </strong><b>Korea University, 17th July, 2020 </b>


    `},
        {
            title: ` The Glasses are Tinted: Self-Confidence and Poverty Trap `,
            description: `

Speaker: <strong> Anuradha Saha, </strong><b>Ashoka University, Friday, 10th July, 2020 </b>


    `},
        {
            title: ` <b>Parental Absence in Childhood and Adult Criminal Behaviour: Evidence from Survey and Experimental Data from Prison Inmates in China </b>`,
            description: `

Speaker: <strong> Xin Meng, </strong><b>Australian National University, Friday, 3rd July, 2020 </b>


    `},
        {
            title: ` <b>Fiscal and monetary policy coordination</b> `,
            description: `

Speaker: <strong> Arjun Jayadev, </strong><b>Azim Premji University, 26th June, 2020 </b>


    `},
        {
            title: ` <b>Irrigation and culture: gender roles and rights</b> `,
            description: `
            Speaker: <strong> Satyendra Kumar Gupta, </strong><b>O. P. Jindal Global University, 12th June, 2020 </b>
            `}

    ]
}