COMMUNITYPAGE=()=>{

    DISPLAY('',`

    <header class='AppHeader'>

        <img id='BackIcon' class='BackIcon' src='../library/Assets/icon/arrow.png'/>

        <h1 class='Titles'>Community</h1>

    </header>

    <div id='DataDiv' class='ScrollView'>

        <img class='AppLogo' src='../library/Assets/icon/group-users.png'/>

        <h1 class='Message'>Connect With Others</h1>

        <button class='Button'>

            <h1 class='Buttontitle'>Movie Request</h1>

            <img class='ButtonIcon' src='../library/Assets/icon/review.png'/>
        
        </button>

        <button class='Button'>

            <h1 class='Buttontitle'>Trends</h1>

            <img class='ButtonIcon' src='../library/Assets/icon/trending-topic.png'/>
        
        </button>

        <button class='Button'>

            <h1 class='Buttontitle'>Movie Night</h1>

            <img class='ButtonIcon' src='../library/Assets/icon/movie-night.png'/>
        
        </button>

    </div>

    `);

    CLICKED('#BackIcon',()=>{
        
        EXTERNALJS('../project/UserAccountPage/UserAccountPage.js',()=>{USERACCOUNTPAGE()})

    })

}