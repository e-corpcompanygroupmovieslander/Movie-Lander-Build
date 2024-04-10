import { UGANDANPREMIUMPAGE } from "../UgandanPremiumPage/UgandanPremiumPage.js"

const PREMIUMPAGE=()=>{

    DEJSON('local','UserData',(data)=>{

        CONDITION( data.Location === 'Uganda',

        ()=>UGANDANPREMIUMPAGE(),

        ()=>alert('Not Ugandan')
    
        )

    })

}
export{PREMIUMPAGE}