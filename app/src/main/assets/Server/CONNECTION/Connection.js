import { BUSINESSTOOL } from "../FUNCTIONS/BusinessTools/BusinessTools.js"
import { COMMUNITY } from "../FUNCTIONS/Community/Community.js"
import { CREATEUSER } from "../FUNCTIONS/CreateAccount/CreateAccount.js"
import { CREATEACCOUNTPAGEDATA } from "../FUNCTIONS/CreateAccount/CreateAccountPage.js"
import { NOTIFICATIONS } from "../FUNCTIONS/Notifications/Notifications.js"
import { AUTODELETEACCOUNT } from "../PAGES/AutoDeleteAccount/AutoDeleteAccount.js"
import { FORGOTPASSWORDPAGE } from "../PAGES/ForgotPassword/ForgotPassword.js"
import { FORGOTPINPAGE } from "../PAGES/ForgotPinPage/ForgotPinPage.js"
import { HOMEPAGE } from "../PAGES/HomePage/HomePage.js"
import { MOVIESDETAILSPAGE } from "../PAGES/MoviesDetailsPage/MoviesDetailsPage.js"
import { AUTOPREMIUMUSER } from "../PAGES/PremiumAccountChecker/PremiumAccountChecker.js"
import { USERSETTINGSACCOUNTPAGEPREMIUM } from "../PAGES/PremiumAccountPage/PremiumAccountPage.js"
import { PREMIUMPAGE } from "../PAGES/PremiumPage/PremiumPage.js"
import { LIBRARY } from "../PAGES/libraryPage/LibraryPage.js"

const CONNECTION=()=>{

    AUTOPREMIUMUSER();

    AUTODELETEACCOUNT();

    const CASES={
        "HomePage":()=>{
            HOMEPAGE();
        },
        "PremiumPage":()=>{
            PREMIUMPAGE();
        },
        "CatergoriesPage":()=>{
            MOVIESDETAILSPAGE();
        },
        "NotificationsPage":()=>{
            NOTIFICATIONS();
        },
        "CommunityPage":()=>{
            COMMUNITY();
        },
        "BussinessTools":()=>{
            BUSINESSTOOL();
        },
        "ForgotPasswordPage":()=>{
            FORGOTPASSWORDPAGE();
        },
        "ForgotPinPage":()=>{
            FORGOTPINPAGE();
        },
        "LibraryPage":()=>{
            LIBRARY();
        },
        "CreateAccountPageUserFunction":()=>{
            CREATEACCOUNTPAGEDATA();
        },
        "USERSETTINGSACCOUNTPAGEPREMIUM":()=>{
            USERSETTINGSACCOUNTPAGEPREMIUM();
        }
    }

    
    
    const DEFAULT=()=>{

        EXTERNALJS('../library/Connection/Connection.js',()=>{APPSTART()})

    }

    ROUTER(sessionStorage.getItem('Updates'),CASES,DEFAULT);

}

export{CONNECTION}