PARENTALCONTROLPAGE=()=>{

    DISPLAY('',`

        <header class='AppHeader'>

            <img id='BackIcon' class='BackIcon' src='../library/Assets/icon/arrow.png'/>

            <h1 class='Titles'>Parental Control</h1>
        
        </header>

        <div id='DeleteAccountPolicy' class='ScrollView'>

            <img id='HomeLoader' class='LoadingIcon' src='../library/Assets/icon/loading.png'/>
    
        </div>

        <input maxlength='5' class='DeleteAccountInput' type='tel' placeholder='Enter Parental  Pin'/>
    
        <button id='AppLockbtn' class='DeleteButton'>Set</button>
    `)

    CLICKED('#BackIcon',()=>{

        EXTERNALJS('../project/SettingsPage/SettingsPage.js',()=>{SETTINGSPAGE()})

    })

    DECLARATION('#DeleteAccountPolicy',(ELEMENT)=>{

        GETPACKAGE(PARENTALCONTROLTEXT,'cors',(data)=>{

            DISPLAY(ELEMENT,data);

        })

    })

    DECLARATION('.DeleteButton',(ELEMENT)=>{

        CONDITION(!localStorage.getItem('ParentalControl'),

        ()=>DISPLAY(ELEMENT,'Set'),

        ()=>CHECK('',(result)=>{
            
            DISPLAY(ELEMENT,'Clear');

            STYLED(ELEMENT,'background','#ff000080');

        })
    
        )

    })

    const DELETEINPUT=document.querySelector('.DeleteAccountInput');

    CLICKED('.DeleteButton',()=>{

        CONDITION(!DELETEINPUT.value ,

            ()=>MESSAGE('Enter 5 Digit Pin'),
            
            ()=>CONDITION(!localStorage.getItem('ParentalControl'),

                ()=>CHECK(DELETEINPUT,()=>{

                    STORE('local','ParentalControl',DELETEINPUT.value)

                    EXTERNALJS('../project/SettingsPage/SettingsPage.js',()=>{SETTINGSPAGE()})

                }),

                ()=>CONDITION(localStorage.getItem('ParentalControl') === DELETEINPUT.value,

                    ()=>CHECK(DELETEINPUT,()=>{

                        REMOVESTORE('local','ParentalControl')

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