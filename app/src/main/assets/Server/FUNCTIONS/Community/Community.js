import { MOVIEREQUESTPAGE } from "./MovieRequest/MovieRequestPage.js"
import { TRENDINGPAGE } from "./TrendingPage/TrendingPage.js";

const COMMUNITY=()=>{

    CLICKED('#MovieRequest',()=>{

        MOVIEREQUESTPAGE();

    })

    CLICKED('#Trends',()=>{

        TRENDINGPAGE();

    })

}
export{COMMUNITY}