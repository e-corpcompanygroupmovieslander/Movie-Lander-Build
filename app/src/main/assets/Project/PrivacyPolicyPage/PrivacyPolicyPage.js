PRIVACYPOLICYPAGE=()=>{

    DISPLAY('',`

        <header class='AppHeader'>

            <img id='BackIcon' class='BackIcon' src='../library/Assets/icon/arrow.png'/>

            <h1 class='Titles'>Privacy Policy</h1>
        
        </header>

        <div id='DataDiv' class='ScrollView'>

            <img id='HomeLoader' class='LoadingIcon' src='../library/Assets/icon/loading.png'/>
    
        </div>
    
    `)

    CLICKED('#BackIcon',()=>{

        EXTERNALJS('../project/SettingsPage/SettingsPage.js',()=>{SETTINGSPAGE()})

    })

    DECLARATION('#DataDiv',(ELEMENT)=>{

        GETPACKAGE(PRIVACYTEXT,'cors',(data)=>{

            DISPLAY(ELEMENT,data);

        })

    })

}