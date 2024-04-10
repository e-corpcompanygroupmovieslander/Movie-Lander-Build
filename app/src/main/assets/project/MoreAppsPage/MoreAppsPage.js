MOREAPPSPAGE=()=>{

    DISPLAY('',`

        <header class='AppHeader'>

            <img id='BackIcon' class='BackIcon' src='../library/Assets/icon/arrow.png'/>
        
            <h1 class='Titles'>More Apps</h1>

        </header>

        <div id='DataDiv' class='ScrollView'>

            <img id='HomeLoader' class='LoadingIcon' src='../library/Assets/icon/loading.png'/>
    
        </div>
    
    `)

    CLICKED('#BackIcon',()=>{

        EXTERNALJS('../project/UserAccountPage/UserAccountPage.js',()=>{USERACCOUNTPAGE()})

    })

    DECLARATION('#DataDiv',(ELEMENT)=>{

        GETPACKAGE(MOREAPPSAPI,'cors',(data)=>{

            DISPLAY(ELEMENT,'');

            REDUX(data,(element)=>{

                CREATEELEMENT('div','FreeMoviesHolder',(MOVIESHOLDER)=>{

                    DISPLAY(MOVIESHOLDER,`

                        <img class='FreeMoviesImages' src='${ADVERTSPATH + element.APPIMAGE}'/>
                    
                    `);

                    EVENT(MOVIESHOLDER,'click',()=>{

                        WEBSITE(element.APPLINK)
                    })

                    ADD(ELEMENT,MOVIESHOLDER);

                })

            })

        })

    })

}