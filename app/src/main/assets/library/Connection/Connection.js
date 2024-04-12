//SET FRAME WORK
STORE('local','FrameWork','Advance-Native');
STORE('local','FrameWorkVersion','0.0.1');
STORE('local','Device','Android');
STORE('local','AppVersion',CURRENTVERSION);
APPMODE(localStorage.getItem('AppColour'),'','#121212');
BODY();
ZOOM();
ENVIRONMENT('Test');


if (localStorage.getItem('Environment') === 'Production') {
   
    if (navigator.onLine) {

        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://e-corpcompanygroupmovieslander.github.io/Movie-Lander-Build/app/src/main/assets/Server/CONNECTION/Connection.css';
        document.head.appendChild(link);
    
    } else {
    
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '../Server/CONNECTION/Connection.css';
        document.head.appendChild(link);
    
    }
    
}else{
   
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '../Server/CONNECTION/Connection.css';
    document.head.appendChild(link);
    
}

const APPSTART = () => {

    CONDITION( VERSIONSTATUS === 'Minor' ,

    () => CONDITION(localStorage.getItem('AppLock'),

        () => CHECK(VERSIONSTATUS, (result) => {

            DISPLAY('',`

                <img class='AppLogo' src='../library/Assets/images/movie lander logo.png'/>

                <input id='Pin' maxlength='5' type='tel' placeholder='Enter Your Pin'/>

                <h1 id='ForgotPin' class='Forgot'>ForgotPin?</h1>

                <button id='Unlock'>Unlock</button>
        
            `);

            STORE('','Updates','ForgotPinPage');

            CLICKED('#ForgotPin', () => {

                EXTERNALJS('../project/AppLockPage/RecoveryLock.js',()=>{LOCKRECOVERY()})
    
            });

            const PIN=document.querySelector('#Pin');
            
            CLICKED('#Unlock', () => {

                CONDITION(!PIN.value,

                    () => MESSAGE('Enter 5 Digit Pin'),

                    () => CONDITION(PIN.value === localStorage.getItem('AppLock'),

                        () => CONDITION(localStorage.getItem('User'),

                            () => EXTERNALJS('../project/HomePage/HomePage.js', () => { HOMEPAGE() }),
                        
                            () => EXTERNALJS('../project/LoginPage/loginPage.js', () => { LOGINPAGE() })
                        
                            ),
                        
                        () => MESSAGE('Wrong AppLock Pin'),
                    
                    )
                
                );

            });

        }),

        () => CONDITION(localStorage.getItem('User'),

        () => EXTERNALJS('../project/HomePage/HomePage.js', () => { HOMEPAGE() }),
    
        () => EXTERNALJS('../project/LoginPage/loginPage.js', () => { LOGINPAGE() })
    
        )

    ),

    () => CHECK(APPVERSION, (result) => {

        DISPLAY('',`

            <img class='AppLogo' src='../library/Assets/images/movie lander logo.png'/>

            <h1 class='VersionName'>Update Required</h1>

            <div class='VersionMessage'>${UPDATEMESSAGE}</div>

            <button id='UpdateButton' class='Button'>

                <h1 class='Buttontitle'>Download</h1>

                <img class='ButtonIcon' src='../library/Assets/icon/download.png'/>
            
            </button>
        
        `);

        CLICKED('#UpdateButton', () => {

            WEBSITE(UPDATEAPI);

        });

    })

    );

};