APPPLAYER=()=>{

    DISPLAY('',`

    <header class='AppHeader'>

        <img id='BackIcon' class='BackIcon' src='../library/Assets/icon/arrow.png'/>

        <h1 class='Titles'>Media</h1>

    </header>

    <div id='DataDiv' class='ScrollView'>

        <img class='AppLogo' src='../library/Assets/icon/lander.png'/>

        <h1 class='Message'>Cinema player</h1>

        <button id='Gmail' class='Button'>

            <h1 class='Buttontitle'>Drive Player</h1>

            <img class='ButtonIcon' src='../library/Assets/icon/Drive.png'/>
        
        </button>

        <button id='Instagram' class='Button'>

            <h1 class='Buttontitle'>App Player</h1>

            <img class='ButtonIcon' src='../library/Assets/icon/movies.png'/>
        
        </button>

        <button id='Site' class='Button'>

            <h1 class='Buttontitle'>Youtube Player</h1>

            <img class='ButtonIcon' src='../library/Assets/icon/lander.png'/>
        
        </button>

    </div>

    `);

    CLICKED('#BackIcon',()=>{
        
        EXTERNALJS('../project/SettingsPage/SettingsPage.js',()=>{SETTINGSPAGE()});
    
    })

    CLICKED('#Gmail',()=>{

        STORE('local','Player','Drive');

        EXTERNALJS('../project/SettingsPage/SettingsPage.js',()=>{SETTINGSPAGE()});

        MESSAGE('Appp Player Changed');

    })

    CLICKED('#Instagram',()=>{

        STORE('local','Player','LanderPlayer');

        EXTERNALJS('../project/SettingsPage/SettingsPage.js',()=>{SETTINGSPAGE()});

        MESSAGE('App Player Changed');

    })

    CLICKED('#Site',()=>{

        STORE('local','Player','YouTubePlayer');

        EXTERNALJS('../project/SettingsPage/SettingsPage.js',()=>{SETTINGSPAGE()});

        MESSAGE('App Player Changed');

    })

}