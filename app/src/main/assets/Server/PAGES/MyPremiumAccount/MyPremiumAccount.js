import { USERSETTINGSACCOUNTPAGEPREMIUM } from "../AccountsSettingsPage/PremiumAccountPage.js"

const MYPREMIUMACCOUNT=()=>{

    DEJSON('local','PremiumUser',(data)=>{

        DISPLAY('',`

            <header class='AppHeader'>

                <img id='BackIcon' class='BackIcon' src='../library/Assets/icon/arrow.png'/>

                <h1 class='Titles'>Premium</h1>
            
            </header>

            <div id='DataDiv' class='ScrollView'>

                <button class='MyDataButton'>

                    <h1 class='mytitle'>Subscription</h1>

                    <img class='myIcon' src='../library/Assets/icon/subscription.png'/>
                
                    <h1 class='MyData'>${data.AmountPaid}</h1>

                </button>

                <button class='MyDataButton'>

                    <h1 class='mytitle'>Paid On</h1>

                    <img class='myIcon' src='../library/Assets/icon/gmail.png'/>
                
                    <h1 class='MyData'>${data.PayDate}</h1>

                </button>

                <button class='MyDataButton'>

                    <h1 class='mytitle'>Expiry Date</h1>

                    <img class='myIcon' src='../library/Assets/icon/location.png'/>
                
                    <h1 class='MyData'>${data.ExpiryDate}</h1>

                </button>

                <button class='MyDataButton'>

                    <h1 class='mytitle'>Paid By</h1>

                    <img class='myIcon' src='../library/Assets/icon/phone.png'/>
                
                    <h1 class='MyData'>${data.User}</h1>

                </button>

                <button class='MyDataButton'>

                    <h1 class='mytitle'>Reference Code</h1>

                    <img class='myIcon' src='../library/Assets/icon/secretcode.png'/>
                
                    <h1 class='MyData'>${data.TRANSACTIONID}</h1>

                </button>

                <br><br>

                <button id='LogOut' class='Button'>

                    <h1 class='Buttontitle'>Upgrade Subscription</h1>

                    <img class='ButtonIcon' src='../library/Assets/icon/logout.png'/>
                
                </button>

                <br><br>

            </div>
        
        `)

        CLICKED('#BackIcon',()=>{
            USERSETTINGSACCOUNTPAGEPREMIUM()
        })


    })

}

export{MYPREMIUMACCOUNT}