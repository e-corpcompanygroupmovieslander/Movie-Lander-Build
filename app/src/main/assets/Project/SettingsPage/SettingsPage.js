SETTINGSPAGE=()=>{

    DISPLAY('',`

        <header class='AppHeader'>

            <img id='BackIcon' class='BackIcon' src='../library/Assets/icon/arrow.png'/>

            <h1 class='Titles'>Settings</h1>
        
        </header>

        <div id='DataDiv' class='ScrollView'>

            <button id='AppLock' class='Button'>

                <h1 class='Buttontitle'>AppLock</h1>

                <img class='ButtonIcon' src='../library/Assets/icon/lock.png'/>
            
            </button>

            <button  id='AppPlayer' class='Button'>

                <h1 class='Buttontitle'>App Player</h1>

                <img class='ButtonIcon' src='../library/Assets/icon/drive.png'/>
            
            </button>

            <button id='ParentalControl' class='Button'>

                <h1 class='Buttontitle'>Parental Control</h1>

                <img class='ButtonIcon' src='../library/Assets/icon/caution.png'/>
            
            </button>

            <button id='HelpPage' class='Button'>

                <h1 class='Buttontitle'>Help</h1>

                <img class='ButtonIcon' src='../library/Assets/icon/help.png'/>
            
            </button>

            <button id='PrivacyPolicy' class='Button'>

                <h1 class='Buttontitle'>Privacy Policy</h1>

                <img class='ButtonIcon' src='../library/Assets/icon/privacypolicy.png'/>
            
            </button>

            <br><br>

            <button id='AppVersion' class='MyDataButton'>

                    <h1 class='mytitle'>App Version</h1>

                    <img class='myIcon' src='../library/Assets/icon/app.png'/>
                
                    <h1 id='VersionName' class='MyData'>${CURRENTVERSION}</h1>

            </button>

        </div>

    `)

    CLICKED('#BackIcon',()=>{

        EXTERNALJS('../project/UserAccountPage/UserAccountPage.js',()=>{USERACCOUNTPAGE()})

    })

    CLICKED('#PrivacyPolicy',()=>{

        EXTERNALJS('../project/PrivacyPolicyPage/PrivacyPolicyPage.js',()=>{PRIVACYPOLICYPAGE()})

    })

    CLICKED('#HelpPage',()=>{

        EXTERNALJS('../project/HelpPage/HelpPage.js',()=>{HELPPAGE()})

    })

    CLICKED('#ParentalControl',()=>{

        EXTERNALJS('../project/ParentalControlPage/ParentalControlPage.js',()=>{PARENTALCONTROLPAGE()})

    })

    CLICKED('#AppPlayer',()=>{

        EXTERNALJS('../project/AppPlayerPage/AppPlayerPage.js',()=>{APPPLAYER()})

    })


    CLICKED('#AppVersion',()=>{

        CONDITION(APPVERSION === CURRENTVERSION   ,

            ()=>MESSAGE('No Updates Available'),

            ()=>CONDITION(APPVERSION < CURRENTVERSION,

                ()=>MESSAGE('No Updates Available'),

                ()=>CONFIRMBOX(`Movie Lander ${APPVERSION} <br><br> Update To The Latest Version`,(data)=>{

                    CONDITION(data === true,
    
                        ()=>WEBSITE(UPDATEAPI),
    
                        ()=>console.log('Waiting For Major Update')
                    
                    )
    
                }),
            
            )

        )

    })

    CLICKED('#AppLock',()=>{

        EXTERNALJS('../project/AppLockPage/AppLockPage.js',()=>{APPLOCKPAGE()})

    })

}