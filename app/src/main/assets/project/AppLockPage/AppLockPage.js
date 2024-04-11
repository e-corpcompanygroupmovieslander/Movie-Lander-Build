APPLOCKPAGE=()=>{

    DISPLAY('',`

        <header class='AppHeader'>

            <img id='BackIcon' class='BackIcon' src='../library/Assets/icon/arrow.png'/>

            <h1 class='Titles'>AppLock</h1>
        
        </header>

        <div id='DeleteAccountPolicy' class='ScrollView'>

            <img id='HomeLoader' class='LoadingIcon' src='../library/Assets/icon/loading.png'/>
    
        </div>

        <input maxlength='5' class='DeleteAccountInput' type='tel' placeholder='Enter App Lock Pin'/>
    
        <button id='AppLockbtn' class='DeleteButton'>Set</button>
    `)

    CLICKED('#BackIcon',()=>{

        EXTERNALJS('../project/SettingsPage/SettingsPage.js',()=>{SETTINGSPAGE()})

    })

    DECLARATION('#DeleteAccountPolicy',(ELEMENT)=>{

        GETPACKAGE(APPLOCKAPI,'cors',(data)=>{

            DISPLAY(ELEMENT,data);

        })

    })

    DECLARATION('.DeleteButton',(ELEMENT)=>{

        CONDITION(!localStorage.getItem('AppLock'),

        ()=>DISPLAY(ELEMENT,'Set'),

        ()=>DISPLAY(ELEMENT,'Clear')
    
        )

    })

    const DELETEINPUT=document.querySelector('.DeleteAccountInput');

    CLICKED('.DeleteButton',()=>{

        CONDITION(!DELETEINPUT.value ,

            ()=>MESSAGE('Enter 5 Digit Pin'),
            
            ()=>CONDITION(!localStorage.getItem('AppLock'),

                ()=>CHECK(DELETEINPUT,()=>{

                    STORE('local','AppLock',DELETEINPUT.value)

                    EXTERNALJS('../library/Connection/Connection.js',()=>{APPSTART()})

                }),

                ()=>CONDITION(localStorage.getItem('AppLock') === DELETEINPUT.value,

                    ()=>CHECK(DELETEINPUT,()=>{

                        REMOVESTORE('local','AppLock')

                        EXTERNALJS('../project/SettingsPage/SettingsPage.js',()=>{SETTINGSPAGE()})
    
                    }),

                    ()=>CHECK(DELETEINPUT,()=>{

                        MESSAGE('Wrong User Pin')
    
                    }),
            
                )

            )

        )

    })

}