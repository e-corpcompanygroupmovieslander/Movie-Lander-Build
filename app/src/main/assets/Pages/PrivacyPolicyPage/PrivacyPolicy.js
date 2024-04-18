DISPLAY('',`

<header class='AppHeader'>

    <img id='AppimageSection' class='BackIcon' src='../../library/Assets/images/playstore.png'/>

    <h1 id='Section' class='Titles'>Movie Lander Policies</h1>

</header>

<div id='PolicyDataDiv' class='ScrollView'>

    <img id='HomeLoader' class='LoadingIcon' src='../../library/Assets/icon/loading.png'/>

</div>

`)

DECLARATION('#PolicyDataDiv',(ELEMENT)=>{

    GETPACKAGE(PRIVACYTEXT,'cors',(data)=>{
        DISPLAY(ELEMENT,data)
    })

})