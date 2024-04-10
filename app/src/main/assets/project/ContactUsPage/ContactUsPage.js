CONTACTUSPAGE=()=>{

    DISPLAY('',`

    <header class='AppHeader'>

        <img id='BackIcon' class='BackIcon' src='../library/Assets/icon/arrow.png'/>

        <h1 class='Titles'>Contact</h1>

    </header>

    <div id='DataDiv' class='ScrollView'>

        <img class='AppLogo' src='../library/Assets/icon/link.png'/>

        <h1 class='Message'>Reach Us</h1>

        <button id='Gmail' class='Button'>

            <h1 class='Buttontitle'>G-mail</h1>

            <img class='ButtonIcon' src='../library/Assets/icon/Gmail.png'/>
        
        </button>

        <button id='Instagram' class='Button'>

            <h1 class='Buttontitle'>Instagram</h1>

            <img class='ButtonIcon' src='../library/Assets/icon/instagram.png'/>
        
        </button>

        <button id='Site' class='Button'>

            <h1 class='Buttontitle'>Movie-Lander</h1>

            <img class='ButtonIcon' src='../library/Assets/icon/internet.png'/>
        
        </button>

    </div>

    `);

    CLICKED('#BackIcon',()=>{
        
        EXTERNALJS('../project/UserAccountPage/UserAccountPage.js',()=>{USERACCOUNTPAGE()})

    })

    CLICKED('#Gmail',()=>{

        GMAIL(GmailLink);

    })

    CLICKED('#Instagram',()=>{

        INSTAGRAM(InstagramUserName);

    })

    CLICKED('#Site',()=>{

        WEBSITE(WebsiteContact);

    })

}