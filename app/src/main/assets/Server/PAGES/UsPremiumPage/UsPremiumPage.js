import { MOVIESDETAILSPAGE } from "../MoviesDetailsPage/MoviesDetailsPage.js"

const USPREMIUMPAGE=()=>{

    DISPLAY('',`

        <header class='AppHeader'>

            <img id='BackIcon' class='BackIcon' src='../library/Assets/icon/arrow.png'/>

            <h1 class='Titles'>Premium </h1>
        
        </header>

        <div id='DataDiv' class='ScrollView'>

            <div class='View'>

                <h1 class='PremuimTitle'>Daily</h1>

                <h1 class='Price'>1USD</h1>

                <h2 class='PremiumFeatures'>Features</h2>

                <div class='AccessDiv'>

                    <h1 class='PremuimAccess'>Get Access To All Movies</h1>
                
                </div>

                <button id='UGDaily' class='paybtn'>Pay</button>
            
            </div>

            <div class='View'>

                <h1 class='PremuimTitle'>Weekly</h1>

                <h1 class='Price'>5USD</h1>

                <h2 class='PremiumFeatures'>Features</h2>

                <div class='AccessDiv'>

                    <h1 class='PremuimAccess'>Get Access To All Movies</h1>

                    <h1 class='PremuimAccess'>Get Access To Community</h1>
            
                </div>

                <button id='UGWeekly' class='paybtn'>Pay</button>
            
            </div>


            <div class='View'>

                <h1 class='PremuimTitle'>Monthly</h1>

                <h1 class='Price'>20USD</h1>

                <h2 class='PremiumFeatures'>Features</h2>

                <div class='AccessDiv'>

                    <h1 class='PremuimAccess'>Get Access To All Movies</h1>

                    <h1 class='PremuimAccess'>Get Access To Community</h1>

                    <h1 class='PremuimAccess'>Get 3 days Extra</h1>
            
                </div>

                <button id='UGMonthly' class='paybtn'>Pay</button>
            
            </div>


            <div class='View'>

                <h1 class='PremuimTitle'>Yearly</h1>

                <h1 class='Price'>100USD</h1>

                <h2 class='PremiumFeatures'>Features</h2>

                
                <div class='AccessDiv'>

                    <h1 class='PremuimAccess'>Get Access To All Movies</h1>

                    <h1 class='PremuimAccess'>Get Access To Community</h1>

                    <h1 class='PremuimAccess'>Get 1GB Cloud Storage</h1>

                    <h1 class='PremuimAccess'>Get 2 months Extra</h1>
            
                </div>

                <button id='UGYearly' class='paybtn'>Pay</button>
            
            </div>

            <br><br>

        </div>
        
    `)

    CLICKED('#BackIcon',()=>{

        CONDITION(sessionStorage.getItem('PremiumPath') === 'PremiumPage',

            ()=>EXTERNALJS('../project/UserAccountPage/UserAccountPage.js',()=>{USERACCOUNTPAGE()}),

            ()=>MOVIESDETAILSPAGE()

        )
        
    })

}

export{USPREMIUMPAGE}