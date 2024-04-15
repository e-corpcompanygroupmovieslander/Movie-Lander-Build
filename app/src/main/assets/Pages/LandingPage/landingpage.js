DISPLAY('',`

<header class='AppHeader'>

    <img id='AppimageSection' class='BackIcon' src='../../library/Assets/images/playstore.png'/>

    <h1 id='Section' class='Titles'>Download</h1>

</header>

<div id='PolicyDataDiv' class='ScrollView'>

    <img id='Modeicon' class='BackIcon' src='../../library/Assets/icon/brightness-and-contrast.png'/>

    <img  class='AppLogo' src='../../library/Assets/images/playstore.png'/>

    <div class='ViewHolder'>

        <div id='ImageHolder' class='View'>
        
            <img  class='inAppImages' src='../../library/Assets/images/landingpage/WhatsApp Image 2024-04-15 at 16.03.21.jpeg'/>

        </div>

        <div id='ImageHolder' class='View'>
        
            <img  class='inAppImages' src='../../library/Assets/images/landingpage/WhatsApp Image 2024-04-15 at 16.03.47 (1).jpeg'/>

        </div>

        <div id='ImageHolder' class='View'>
            
            <img  class='inAppImages' src='../../library/Assets/images/landingpage/WhatsApp Image 2024-04-15 at 16.25.12.jpeg'/>

        </div>

        <div id='ImageHolder' class='View'>
        
            <img  class='inAppImages' src='../../library/Assets/images/landingpage/WhatsApp Image 2024-04-15 at 16.04.22.jpeg'/>

        </div>

        <div id='ImageHolder' class='View'>
            
            <img  class='inAppImages' src='../../library/Assets/images/landingpage/WhatsApp Image 2024-04-15 at 16.21.54.jpeg'/>

        </div>

        <div id='ImageHolder' class='View'>
        
            <img  class='inAppImages' src='../../library/Assets/images/landingpage/WhatsApp Image 2024-04-15 at 16.22.29.jpeg'/>

        </div>

    </div>

    <br><br>

    <button id='Market' class='Button'>

        <h1 class='Buttontitle'>Download From PlayStore</h1>

        <img class='ButtonIcon' src='../../library/Assets/icon/playstore.png'/>
        
    </button>

    <button id='Market' class='Button'>

        <h1 class='Buttontitle'>Download Apk</h1>

        <img class='ButtonIcon' src='../../library/Assets/icon/app.png'/>
        
    </button>


    

</div>

`)

APPMODE('','','#121212')

CLICKED('#Modeicon',()=>{

    CONDITION(localStorage.getItem('AppColour') === '#121212' ,

        ()=>APPMODE('','','#5C829A'),

        ()=>APPMODE('','','#121212')

    )
    
})