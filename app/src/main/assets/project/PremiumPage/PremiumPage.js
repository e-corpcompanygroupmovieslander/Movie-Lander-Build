import { UGANDANPREMIUMPAGE } from "../UgandanPremiumPage/UgandanPremiumPage.js"
import { USPREMIUMPAGE } from "../UsPremiumPage/UsPremiumPage.js"

const PREMIUMPAGE=()=>{

    DEJSON('local','UserData',(data)=>{

        CONDITION( data.Location === 'Uganda',

        ()=>UGANDANPREMIUMPAGE(),

        ()=>USPREMIUMPAGE()
    
        )

    })

}
export{PREMIUMPAGE}