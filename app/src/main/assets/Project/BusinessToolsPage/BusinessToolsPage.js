BUSINESSTOOLSPAGE=()=>{

    DISPLAY('',`

    <header class='AppHeader'>

        <img id='BackIcon' class='BackIcon' src='../library/Assets/icon/arrow.png'/>

        <h1 class='Titles'>BusinessTools</h1>

    </header>

    <div id='DataDiv' class='ScrollView'>

        <img class='AppLogo' src='../library/Assets/icon/suitcase.png'/>

        <h1 class='Message'>Link Up</h1>

        <button id='Advertising' class='Button'>

            <h1 class='Buttontitle'>Advertising</h1>

            <img class='ButtonIcon' src='../library/Assets/icon/megaphone.png'/>
        
        </button>

        <button id='Market' class='Button'>

            <h1 class='Buttontitle'>Market Place</h1>

            <img class='ButtonIcon' src='../library/Assets/icon/online-shopping.png'/>
        
        </button>

        <button id='Shop' class='Button'>

            <h1 class='Buttontitle'>Shop</h1>

            <img class='ButtonIcon' src='../library/Assets/icon/cart.png'/>
        
        </button>

    </div>

    `);

    CLICKED('#BackIcon',()=>{
        
        EXTERNALJS('../project/UserAccountPage/UserAccountPage.js',()=>{USERACCOUNTPAGE()})

    })

    STORE('','Updates','BussinessTools')

    MODULE(`${Onlink}`,'CONNECTION',(CONNECTION)=>{CONNECTION()})

}