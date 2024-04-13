import { MOVIESDETAILSPAGE } from "../MoviesDetailsPage/MoviesDetailsPage.js"
import { PAYMENTPAGE } from "../PremiumPage/PaymentPage.js"

const USPREMIUMPAGE=()=>{

    DEJSON('local','UserData',(data)=>{

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

                    <h1 class='Price'>5 USD</h1>

                    <h2 class='PremiumFeatures'>Features</h2>

                    <div class='AccessDiv'>

                        <h1 class='PremuimAccess'>Get Access To All Movies</h1>

                        <h1 class='PremuimAccess'>Get Access To Community</h1>
                
                    </div>

                    <button id='UGWeekly' class='paybtn'>Pay</button>
                
                </div>


                <div class='View'>

                    <h1 class='PremuimTitle'>Monthly</h1>

                    <h1 class='Price'> 20 USD</h1>

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

                    <h1 class='Price'> 100 USD</h1>

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

                ()=>CONDITION(sessionStorage.getItem('PremiumPath') === 'MyAccount',

                    ()=>EXTERNALJS('../project/UserAccountSettings/UserAccountSettings.js',()=>{USERSETTINGSACCOUNTPAGE()}),

                    ()=>MOVIESDETAILSPAGE()

                )

            )
            
        })

        //UGANDAN PAYMENT

        DECLARATION('#UGDaily',(ELEMENT)=>{
        
            EVENT(ELEMENT,'click',()=>{
    
                DECLARATION('#UGWeekly',(ELEMENT)=>{
    
                    ORIGIN(ELEMENT,'Pay');
    
                })
    
                
                DECLARATION('#UGMonthly',(ELEMENT)=>{
    
                    ORIGIN(ELEMENT,'Pay');
    
                })
    
                DECLARATION('#UGYearly',(ELEMENT)=>{
    
                    ORIGIN(ELEMENT,'Pay');
    
                })
    
                
                LOADER(ELEMENT)
    
                PESAPAL(`https://e-corpcompanygroupmovieslander.github.io/MovieLanderApp/PAGES/PAYMENT%20SYSTEM/DailyPesaPal.html?MyData=${localStorage.getItem('User')}`,1,'USD',(data)=>{
    
                    STORE('','Link',data)
    
                    if (sessionStorage.getItem('Link')) {
                        
                        PAYMENTPAGE();
    
                    } else {
                        
                        MESSAGE('Something Went Wrong ');
    
                    }
    
                });
    
            })
    
        })
    
        DECLARATION('#UGWeekly',(ELEMENT)=>{
    
            EVENT(ELEMENT,'click',()=>{
    
                DECLARATION('#UGDaily',(ELEMENT)=>{
    
                    ORIGIN(ELEMENT,'Pay');
    
                })
    
                
                DECLARATION('#UGMonthly',(ELEMENT)=>{
    
                    ORIGIN(ELEMENT,'Pay');
    
                })
    
                DECLARATION('#UGYearly',(ELEMENT)=>{
    
                    ORIGIN(ELEMENT,'Pay')
    
                })
    
                LOADER(ELEMENT)
    
                PESAPAL(`https://e-corpcompanygroupmovieslander.github.io/MovieLanderApp/PAGES/PAYMENT%20SYSTEM/WeeklyPesaPal.html?MyData=${localStorage.getItem('User')}`,5,'USD',(data)=>{
    
                    STORE('','Link',data)
    
                    if (sessionStorage.getItem('Link')) {
                        
                        PAYMENTPAGE();
    
                    } else {
                        
                        MESSAGE('Something Went Wrong ');
    
                    }
                
                });
    
            })
    
        })
    
        DECLARATION('#UGMonthly',(ELEMENT)=>{
    
            EVENT(ELEMENT,'click',()=>{
    
                DECLARATION('#UGDaily',(ELEMENT)=>{
    
                    ORIGIN(ELEMENT,'Pay');
    
                })
    
                
                DECLARATION('#UGWeekly',(ELEMENT)=>{
    
                    ORIGIN(ELEMENT,'Pay');
    
                })
    
                DECLARATION('#UGYearly',(ELEMENT)=>{
    
                    ORIGIN(ELEMENT,'Pay');
    
                })
    
                LOADER(ELEMENT)
    
                PESAPAL(`https://e-corpcompanygroupmovieslander.github.io/MovieLanderApp/PAGES/PAYMENT%20SYSTEM/MonthlyPesaPal.html?MyData=${localStorage.getItem('User')}`,20,'USD',(data)=>{
    
                STORE('','Link',data)
    
                    if (sessionStorage.getItem('Link')) {
                        
                        PAYMENTPAGE();
    
                    } else {
                        
                        MESSAGE('Something Went Wrong ');
    
                    }
    
                
                });
    
            })
    
        })
    
        DECLARATION('#UGYearly',(ELEMENT)=>{
    
            EVENT(ELEMENT,'click',()=>{
    
                DECLARATION('#UGDaily',(ELEMENT)=>{
    
                    ORIGIN(ELEMENT,'Pay');
    
                })
    
                
                DECLARATION('#UGWeekly',(ELEMENT)=>{
    
                    ORIGIN(ELEMENT,'Pay');
    
                })
    
                DECLARATION('#UGMonthly',(ELEMENT)=>{
    
                    ORIGIN(ELEMENT,'Pay');
    
                })
    
                LOADER(ELEMENT)
    
                PESAPAL(`https://e-corpcompanygroupmovieslander.github.io/MovieLanderApp/PAGES/PAYMENT%20SYSTEM/YearlyPesaPal.html?MyData=${localStorage.getItem('User')}`,100,'USD',(data)=>{
    
                STORE('','Link',data)
    
                    if (sessionStorage.getItem('Link')) {
                        
                        PAYMENTPAGE();
    
                    } else {
                        
                        MESSAGE('Something Went Wrong ');
    
                    }
                
                });
    
            })
    
        })
    
    })

}

export{USPREMIUMPAGE}