import { HOMEPAGE } from "../PAGES/HomePage/HomePage.js"
import { MOVIESDETAILSPAGE } from "../PAGES/MoviesDetailsPage/MoviesDetailsPage.js"
import { AUTOPREMIUMUSER } from "../PAGES/PremiumAccountChecker/PremiumAccountChecker.js"
import { PREMIUMPAGE } from "../PAGES/PremiumPage/PremiumPage.js"

const CONNECTION=()=>{

    CONDITION(sessionStorage.getItem('Updates')==='HomePage',

        ()=>HOMEPAGE(),

        ()=>CONDITION(sessionStorage.getItem('Updates')==='PremiumPage',

        ()=>PREMIUMPAGE(),

        ()=>CONDITION(sessionStorage.getItem('Updates')==='CatergoriesPage',

        ()=>MOVIESDETAILSPAGE(),

        ()=>alert('')

        )

        )

    )

    AUTOPREMIUMUSER();

}

export{CONNECTION}