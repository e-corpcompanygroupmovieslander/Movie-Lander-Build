import { BUSINESSTOOL } from "../FUNCTIONS/BusinessTools/BusinessTools.js"
import { COMMUNITY } from "../FUNCTIONS/Community/Community.js"
import { NOTIFICATIONS } from "../FUNCTIONS/Notifications/Notifications.js"
import { USERSETTINGSACCOUNTPAGEPREMIUM } from "../PAGES/AccountsSettingsPage/PremiumAccountPage.js"
import { AUTOACCOUNTUPDATING } from "../PAGES/AutoAccountUpdating/AutoAccountUpdating.js"
import { AUTODELETEACCOUNT } from "../PAGES/AutoDeleteAccount/AutoDeleteAccount.js"
import { AUTODEVICE } from "../PAGES/AutoDevice/AutoDevice.js"
import { HOMEPAGE } from "../PAGES/HomePage/HomePage.js"
import { MOVIESDETAILSPAGE } from "../PAGES/MoviesDetailsPage/MoviesDetailsPage.js"
import { AUTOPREMIUMUSER } from "../PAGES/PremiumAccountChecker/PremiumAccountChecker.js"
import { PREMIUMPAGE } from "../PAGES/PremiumPage/PremiumPage.js"
import { LIBRARY } from "../PAGES/libraryPage/LibraryPage.js"

const CONNECTION=()=>{

    AUTODEVICE();

    AUTOPREMIUMUSER();

    AUTODELETEACCOUNT();

    AUTOACCOUNTUPDATING();

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
        "LibraryPage":()=>{
            LIBRARY();
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