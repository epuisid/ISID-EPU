import { paraSpec, routeSpec } from "./rtl.utils";

export interface homePageDataSpec{
    bannerLink:string;
    welcomebox:{
        title:string;
        para:paraSpec;
    };
}

export const HomePageData:homePageDataSpec = {
    bannerLink:`assets/banner.jpg`,
    welcomebox:{
        title:`Welcome to the Economics and Planning Unit!`,
        para:{
            text:`The Economics and Planning Unit is a leading centre of research in
            Economics. With a Masters Programme in Quantitative Economics (MSQE),
            and a Doctoral programme, the Unit is also one of the premier
            institutions for graduate education in Economics in India.`
        }
    }
}