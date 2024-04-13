const AUTODEVICE=()=>{
      
    // Functions to get browser and OS information
    function getBrowserName() { return navigator.appName; }
    function getBrowserVersion() { return navigator.appVersion; }
    function getOSName() { return navigator.platform; }
    function getOSVersion() { return navigator.userAgent; }

    GETPACKAGE(DEVICELOGINAPI,'cors',(data)=>{

        REVERSE(data,(result)=>{

            FINDER(result,'User',localStorage.getItem('User'),(user)=>{

                CONDITION(user.Device === getBrowserVersion(),

                ()=>console.log('Same Device'),

                ()=>CHECK(getBrowserVersion(),(result)=>{

                    DISPLAY('',`

                        <img class='AppLogo' src='../library/Assets/images/playstore.png'/>
            
                        <h1 class='VersionName'>Alert</h1>
            
                        <div class='VersionMessage'>

                            <h2>Choose Device</h2> 

                            

                            <p>${user.Device}</p>

                            <h3>Logout From That Device Above </h3>
                            
                        </div>
            
                        <button id='UpdateButton' class='Button'>
            
                            <h1 class='Buttontitle'>Sign Out All Devices</h1>
            
                            <img class='ButtonIcon' src='../library/Assets/icon/logOut.png'/>
                        
                        </button>
                    
                    `);

                    CLICKED('#UpdateButton',()=>{

                        DECLARATION('#UpdateButton',(ELEMENT)=>{

                            const DEVICEDATA={

                                "User":localStorage.getItem('User'),
                                "Device": "",
                               "Date":new Date()
                            }
    
                            LOADER(ELEMENT)
    
                            POSTPACKAGE(DEVICELOGINAPI,'no-cors',DEVICEDATA,(data)=>{
    
                                REMOVESTORE('local','User');

                                REMOVESTORE('local','UserData');

                                REMOVESTORE('local','Premium');
                                
                                REMOVESTORE('local','PremiumUser');

                                EXTERNALJS('../project/LoginPage/loginPage.js',()=>{LOGINPAGE()})
                               
                            })
    

                        })

                    })

                })
            
                )

            })
            
        })

    })

}

export{AUTODEVICE}