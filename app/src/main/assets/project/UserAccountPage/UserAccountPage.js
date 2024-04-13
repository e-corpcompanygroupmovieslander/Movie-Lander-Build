USERACCOUNTPAGE=()=>{

    STORE('','Updates','PremiumPage');

    DEJSON('local','UserData',(data)=>{

        DISPLAY('',`

            <header class='AppHeader'>

                <img id='BackIcon' class='BackIcon' src='../library/Assets/icon/arrow.png'/>

                <h1 class='Titles'>Profile</h1>
            
            </header>

            <div id='DataDiv' class='ScrollView'>

                <div id='ProfileImageHolder' class='View'>

                    <img class='ProfileImage' src='../library/Assets/images/playstore.png'/>
                    
                    <button class='About'>About</button>

                    <h1 class='UserName'>${data.UserName}</h1>

                    <img id='UserSettingsAccount' class='UserSettingsImage' src='../library/Assets/icon/setting.png'/>
                

                </div>

                <button id='Premium' class='Button'>

                    <h1 class='Buttontitle'>Premium</h1>

                    <img class='ButtonIcon' src='../library/Assets/icon/subscription.png'/>
                
                </button>

                <button id='Community' class='Button'>

                    <h1 class='Buttontitle'>Community</h1>

                    <img class='ButtonIcon' src='../library/Assets/icon/group-users.png'/>
                
                </button>

                <button id='Business' class='Button'>

                    <h1 class='Buttontitle'>Business Tools</h1>

                    <img class='ButtonIcon' src='../library/Assets/icon/suitcase.png'/>
                
                </button>

                <button id='LibraryPage' class='Button'>

                    <h1 class='Buttontitle'>Library</h1>

                    <img class='ButtonIcon' src='../library/Assets/icon/video-folder.png'/>
                
                </button>

                <button id='Notifications' class='Button'>

                    <h1 class='Buttontitle'>Notifications</h1>

                    <img class='ButtonIcon' src='../library/Assets/icon/notifications.png'/>
                
                </button>

                <button id='Settings' class='Button'>

                    <h1 class='Buttontitle'>Settings</h1>

                    <img class='ButtonIcon' src='../library/Assets/icon/setting.png'/>
                
                </button>

                <button id='Contact' class='Button'>

                    <h1 class='Buttontitle'>Contact Us</h1>

                    <img class='ButtonIcon' src='../library/Assets/icon/phone.png'/>
                
                </button>

                <button id='MoreApps' class='Button'>

                    <h1 class='Buttontitle'>More Apps</h1>

                    <img class='ButtonIcon' src='../library/Assets/icon/grid.png'/>
                
                </button>

                <button id='Updates' class='Button'>

                    <h1 class='Buttontitle'>Updates</h1>

                    <img class='ButtonIcon' src='../library/Assets/icon/app.png'/>
                
                </button>

            </div>
        
        `)
        
        CLICKED('#BackIcon',()=>{

            EXTERNALJS('../project/HomePage/HomePage.js',()=>{HOMEPAGE()})

        })

        CLICKED('#UserSettingsAccount',()=>{

            EXTERNALJS('../project/UserAccountSettings/UserAccountSettings.js',()=>{USERSETTINGSACCOUNTPAGE()})

        })

        CLICKED('#Community',()=>{

            EXTERNALJS('../project/CommunityPage/CommunityPage.js',()=>{COMMUNITYPAGE()});

        })

        CLICKED('.About',()=>{

            EXTERNALJS('../project/AboutMePage/AboutMePage.js',()=>{ABOUTMEPAGE()});

        })

        CLICKED('#Settings',()=>{

            EXTERNALJS('../project/SettingsPage/SettingsPage.js',()=>{SETTINGSPAGE()});

        })

        CLICKED('#Contact',()=>{

            EXTERNALJS('../project/ContactUsPage/ContactUsPage.js',()=>{CONTACTUSPAGE()});

        })

        
        CLICKED('#Business',()=>{

            EXTERNALJS('../project/BusinessToolsPage/BusinessToolsPage.js',()=>{BUSINESSTOOLSPAGE()});

        })

        CLICKED('#MoreApps',()=>{

            EXTERNALJS('../project/MoreAppsPage/MoreAppsPage.js',()=>{MOREAPPSPAGE()});

        })

        CLICKED('#Premium',()=>{

            STORE('','PremiumPath','PremiumPage');

            MODULE(`${Onlink}`,'CONNECTION',(CONNECTION)=>{CONNECTION()});

        })

        CLICKED('#Updates',()=>{

            WEBSITE(UPDATEAPI);
        })

        CLICKED('#Notifications',()=>{

            EXTERNALJS('../project/NotificationsPage/NotificationsPage.js',()=>{NOTIFICATIONSPAGE()});

        })

        CLICKED('#LibraryPage',()=>{

            EXTERNALJS('../project/LibraryPage/LibraryPage.js',()=>{LIBARYPAGE()});

        })

    })

}