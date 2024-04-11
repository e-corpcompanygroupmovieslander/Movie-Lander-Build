import { AUTODELETEACCOUNT } from "../PAGES/AutoDeleteAccount/AutoDeleteAccount.js"
import { HOMEPAGE } from "../PAGES/HomePage/HomePage.js"
import { MOVIESDETAILSPAGE } from "../PAGES/MoviesDetailsPage/MoviesDetailsPage.js"
import { AUTOPREMIUMUSER } from "../PAGES/PremiumAccountChecker/PremiumAccountChecker.js"
import { PREMIUMPAGE } from "../PAGES/PremiumPage/PremiumPage.js"

const CONNECTION=()=>{

    AUTOPREMIUMUSER();

    AUTODELETEACCOUNT();

    const CASES={
        "HomePage":()=>{
            HOMEPAGE()
        },
        "PremiumPage":()=>{
            PREMIUMPAGE()
        },
        "CatergoriesPage":()=>{
            MOVIESDETAILSPAGE()
        }
    }

    const DEFAULT=()=>{

        EXTERNALJS('../library/Connection/Connection.js',()=>{APPSTART()})

    }

    ROUTER(sessionStorage.getItem('Updates'),CASES,DEFAULT);

}

export{CONNECTION}